# TODO: clone the input schema

deap = require "deap"

URI = require "./uri"

escape = (string) ->
  string
    .replace(/~0/g, "~")
    .replace(/~1/g, "/")
    .replace(/%25/g, "%")

module.exports = class Validator

  constructor: (@_schema) ->
    @references = {}
    @tests = {}
    @unresolved = {}

    @_schema.id ||= "urn:jsck.anon#"

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
      throw new Error "No such reference '#{ref}'"

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


  compile_references: (schema, ref) ->
    #ref = @construct_ref(stack)
    @references[ref] = schema

    if @test_type "object", schema
      for attribute, definition of schema
        #new_stack = stack.concat([attribute])
        new_ref = "#{ref}/#{attribute}"
        switch attribute
          when "$ref"
            definition = URI.resolve(ref, definition)

            # don't try to resolve recursive references
            if ref.indexOf(definition) != 0
              if schema = @resolve_ref(definition)
                @compile_references schema, ref
              else
                @unresolved[ref] = definition

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


  type_refs: (union, ref) ->
    for schema, i in union
      if @test_type "object", schema
        #@compile_references schema, stack.concat([i.toString()])
        @compile_references schema, "#{ref}/#{i}"

  properties_refs: (properties, ref) ->
    for attribute, schema of properties
      @compile_references schema, "#{ref}/#{attribute}"
  
  pattern_props_refs: (patterns, ref) ->
    for pattern, schema of patterns
      @compile_references schema, "#{ref}/#{pattern}"
    
  items_refs: (definition, ref) ->
    if @test_type "array", definition
      for def, i in definition
        @compile_references def, "#{ref}/#{i}"
    else
      @compile_references definition, ref


  compile: (schema, ref) ->
    #ref = @construct_ref(stack)

    tests = []

    if uri = schema.$ref
      uri = URI.resolve(ref, uri)
      if ref.indexOf(uri) == 0
        return @handle_recursion(schema, ref)
      schema = @find_schema(uri)
      if !schema
        throw new Error "No schema found for $ref '#{uri}'"

    if extended = schema.extends
      if extended.$ref
        extended = @find_schema(extended.$ref)

      delete schema.extends
      if @test_type "array", extended
        deap.merge(schema, extended...)
      else
        deap.merge(schema, extended)


    for attribute, definition of schema
      if spec = @attributes[attribute]
        if !spec.ignore
          options =
            ref: "#{ref}/#{attribute}"
          if spec.modifiers
            for key in spec.modifiers
              options[key] = schema[key]

          test = @[attribute](definition, options)
          #test.ref = @construct_ref options.ref
          test.ref = options.ref
          tests.push test
      else
        if @test_type "object", definition
          @compile definition, "#{ref}/#{attribute}"
        else
          console.log "Unknown attribute: '#{attribute}' is not an object"

    fn = (data) =>
      for test in tests
        if !test(data)
          return false
      true
    @tests[ref] = fn
    fn


  handle_recursion: (schema, ref) ->
    uri = URI.resolve(ref, schema.$ref)
    if !@find_schema(uri)
      throw new Error "No schema found for $ref '#{uri}'"
    (data) =>
      @tests[uri](data)

  attributes:
    id: {ignore: true}
    $ref: { ignore: true }
    extends: {ignore: true}
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

