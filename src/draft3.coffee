# TODO: clone the input schema

deap = require "deap"

URI = require "./uri"

escape = (string) ->
  string
    .replace(/~0/g, "~")
    .replace(/~1/g, "/")
    .replace(/%25/g, "%")

module.exports = class Validator

  constructor: (schema) ->
    @_schema = deap.clone(schema)
    @references = {}
    @tests = {}
    @unresolved = {}

    if @_schema.id
      # Make sure the schema id always ends with "#"
      @_schema.id = @_schema.id.replace /#?$/, "#"
    else
      @_schema.id = "urn:jsck.anon#"

    @compile_references(@_schema, @_schema.id)

    # We try one more time to resolve $ref values, because
    # a schema may have been defined after we initially
    # tried to resolve the $ref.
    for ref, uri of @unresolved
      if schema = @resolve_ref(uri)
        delete @unresolved[ref]
        @references[ref] = schema
    if Object.keys(@unresolved).length > 0
      console.log "Unresolvable $ref values:", @unresolved

    @_validate = @compile(@_schema, @_schema.id)

  validate: (data) ->
    result =
      valid: @_validate(data)

  validate_schema: (uri, data) ->
    if @tests[uri]
      valid: @tests[uri](data)
    else
      throw new Error "No such reference '#{uri}'"

  find_schema: (uri, scope=null) ->
    uri = escape(uri)

    if URI.is_absolute(uri)
      @references[uri]
    else
      scope ||= @_schema.id
      uri = URI.resolve(scope, uri)
      @references[uri]

  resolve_ref: (uri) ->
    if schema = @find_schema(uri)
      if !schema.$ref
        return schema
      else
        @resolve_ref(schema.$ref)
    else
      null


  compile_references: (schema, scope) ->
    @references[scope] = schema
    if schema.id
      id = URI.resolve(scope, schema.id)
      @references[id] = schema

    if @test_type "object", schema
      for attribute, definition of schema
        #new_stack = stack.concat([attribute])
        new_ref = "#{scope}/#{attribute}"
        switch attribute
          when "$ref"
            definition = URI.resolve(scope, definition)

            # don't try to resolve recursive references
            if scope.indexOf(definition) != 0
              if schema = @resolve_ref(definition)
                @compile_references schema, scope
              else
                @unresolved[scope] = definition

          when "type"
            if @test_type "array", definition
              @type_refs definition, new_ref
          when "properties"
            @properties_refs definition, new_ref
          when "patternProperties"
            @pattern_props_refs definition, new_ref
          when "additionalProperties"
            @compile_references definition, new_ref
          when "items"
            @items_refs definition, new_ref
          when "additionalItems"
            @compile_references definition, new_ref
          when "extends"
            @compile_references definition, new_ref
          else
            if !@attributes[attribute] && @test_type "object", definition
              @compile_references definition, new_ref


  type_refs: (union, scope) ->
    for schema, i in union
      if @test_type "object", schema
        #@compile_references schema, stack.concat([i.toString()])
        @compile_references schema, "#{scope}/#{i}"

  properties_refs: (properties, scope) ->
    for attribute, schema of properties
      @compile_references schema, "#{scope}/#{attribute}"
  
  pattern_props_refs: (patterns, scope) ->
    for pattern, schema of patterns
      @compile_references schema, "#{scope}/#{pattern}"
    
  items_refs: (definition, scope) ->
    if @test_type "array", definition
      for def, i in definition
        @compile_references def, "#{scope}/#{i}"
    else
      @compile_references definition, scope


  compile: (schema, scope) ->

    tests = []

    if uri = schema.$ref
      uri = URI.resolve(scope, uri)
      if scope.indexOf(uri) == 0
        return @handle_recursion(schema, scope)
      schema = @find_schema(uri)
      if !schema
        throw new Error "No schema found for $ref '#{uri}'"

    if extended = schema.extends
      if ref = extended.$ref
        extended = @find_schema(ref)
        if !extended
          throw new Error "No schema found for $ref '#{ref}'"

      delete schema.extends
      if @test_type "array", extended
        deap.merge(schema, extended...)
      else
        deap.merge(schema, extended)


    for attribute, definition of schema
      if spec = @attributes[attribute]
        if !spec.ignore
          options =
            scope: "#{scope}/#{attribute}"
          if spec.modifiers
            for key in spec.modifiers
              options[key] = schema[key]

          test = @[attribute](definition, options)
          test.scope = options.scope
          tests.push test
      else
        if @test_type "object", definition
          @compile definition, "#{scope}/#{attribute}"
        else
          console.log "Unknown attribute: '#{attribute}' is not an object"

    fn = (data) =>
      for test in tests
        if !test(data)
          return false
      true

    if schema.id
      id = URI.resolve(scope, schema.id)
      @tests[id] = fn
    @tests[scope] = fn
    fn


  handle_recursion: (schema, scope) ->
    uri = URI.resolve(scope, schema.$ref)
    if !@find_schema(uri)
      throw new Error "No schema found for $ref '#{uri}'"
    (data) =>
      @tests[uri](data)

  attributes:
    id: {ignore: true}
    $ref: { ignore: true }
    extends: {ignore: true}
    title: {ignore: true}
    description: {ignore: true}
    type: {}
    enum: {}
    disallow: {}

    properties: {}
    required: {ignore: true}
    dependencies: {}
    patternProperties: {}
    additionalProperties:
      modifiers: [
        "properties"
        "patternProperties"
      ]

    items:
      modifiers: [
        "additionalItems"
      ]
    additionalItems: {ignore: true}
    maxItems: {}
    minItems: {}
    uniqueItems: {}


    minimum:
      modifiers: [
        "exclusiveMinimum"
      ]
    exclusiveMinimum: {ignore: true}
    maximum:
      modifiers: [
        "exclusiveMaximum"
      ]
    exclusiveMaximum: {ignore: true}
    divisibleBy: {}

    maxLength: {}
    minLength: {}
    pattern: {}
    format: {}


modules = [
  "type"
  "numeric"
  "comparison"
  "arrays"
  "objects"
  "strings"
]

for module_name in modules
  m = require "./draft3/#{module_name}"
  for name, method of m
    Validator.prototype[name] = method

