# TODO: clone the input schema

deap = require "deap"

URI = require "./uri"

escape = (string) ->
  string
    .replace(/~0/g, "~")
    .replace(/~1/g, "/")
    .replace(/%25/g, "%")

class Context

  constructor: ({@pointer, @scope}) ->

  child: (token) ->
    new Context
      pointer: "#{@pointer}/#{token}"
      scope: @scope

  change_scope: (id) ->
    @scope = URI.resolve(@scope, id)

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

    context = new Context
      pointer: @_schema.id
      scope: @_schema.id
    @compile_references @_schema, context

    # We try one more time to resolve $ref values, because
    # a schema may have been defined after we initially
    # tried to resolve the $ref.
    for ref, uri of @unresolved
      if schema = @resolve_ref(uri)
        delete @unresolved[ref]
        @references[ref] = schema
    if Object.keys(@unresolved).length > 0
      console.log "Unresolvable $ref values:", @unresolved

    @_validate = @compile(@_schema, context)

  validate: (data) ->
    result =
      valid: @_validate(data)

  validate_schema: (uri, data) ->
    if @tests[uri]
      valid: @tests[uri](data)
    else
      throw new Error "No such reference '#{uri}'"

  find_schema: (uri) ->
    uri = escape(uri)

    if URI.is_absolute(uri)
      @references[uri]
    else
      uri = URI.resolve(@_schema.id, uri)
      @references[uri]

  resolve_ref: (uri) ->
    if schema = @find_schema(uri)
      if !schema.$ref
        return schema
      else
        @resolve_ref(schema.$ref)
    else
      null


  compile_references: (schema, context) ->
    {pointer} = context
    @references[pointer] = schema
    if schema.id
      context.change_scope(schema.id)
      #id = URI.resolve(pointer, schema.id)
      @references[context.scope] = schema

    if @test_type "object", schema
      for attribute, definition of schema
        new_context = context.child(attribute)
        switch attribute
          when "$ref"
            uri = URI.resolve(pointer, definition)

            # don't try to resolve recursive references
            if pointer.indexOf(uri) != 0
              if schema = @resolve_ref(uri)
                @compile_references schema, context
              else
                @unresolved[pointer] = uri

          when "type"
            if @test_type "array", definition
              @type_refs definition, new_context
          when "properties", "patternProperties"
            @dictionary_refs definition, new_context
          when "items"
            @items_refs definition, new_context
          when "additionalItems", "additionalProperties", "extends"
            @compile_references definition, context.child(attribute)
          else
            if !@attributes[attribute] && @test_type "object", definition
              @compile_references definition, context.child(attribute)


  type_refs: (union, context) ->
    for schema, i in union
      if @test_type "object", schema
        @compile_references schema, context.child(i.toString())

  dictionary_refs: (properties, context) ->
    for key, schema of properties
      @compile_references schema, context.child(key)
  
  items_refs: (definition, context) ->
    if @test_type "array", definition
      for def, i in definition
        @compile_references def, context.child(i.toString())
    else
      @compile_references definition, context


  compile: (schema, context) ->
    {pointer} = context
    if schema.id
      context.change_scope(schema.id)
    tests = []

    if uri = schema.$ref
      uri = URI.resolve(pointer, uri)
      if pointer.indexOf(uri) == 0
        return @handle_recursion(schema, {pointer})
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
          new_context = context.child(attribute)
          new_context.modifiers = {}
          if spec.modifiers
            for key in spec.modifiers
              new_context.modifiers[key] = schema[key]

          # Delegate to a handler named after the attribute
          test = @[attribute](definition, new_context)
          test.pointer = new_context.pointer
          tests.push test
      else
        if @test_type "object", definition
          @compile definition, context.child(attribute)
        else
          console.log "Unknown attribute: '#{attribute}' is not an object"

    fn = (data) =>
      for test in tests
        if !test(data)
          return false
      true

    if schema.id
      @tests[context.scope] = fn
    @tests[pointer] = fn
    fn


  handle_recursion: (schema, {pointer}) ->
    uri = URI.resolve(pointer, schema.$ref)
    if !@find_schema(uri)
      throw new Error "No schema found for $ref '#{uri}'"
    (data) =>
      @tests[uri](data)

  attributes:
    $schema: {ignore: true}
    id: {ignore: true}
    $ref: { ignore: true }
    extends: {ignore: true}

    title: {ignore: true}
    description: {ignore: true}
    default: {ignore: true}

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

