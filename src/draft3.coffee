# TODO: clone the input schema

deap = require "deap"

module.exports = class Validator

  constructor: (@_schema) ->
    @references = {}
    @tests = {}
    @compile_references(@_schema)

    @_validate = @compile(@_schema)

  validate: (data) ->
    result =
      valid: @_validate(data)

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


  construct_ref: (stack) ->
    if stack.length > 0
      # escape characters
      array = []
      for string in stack
        array.push string
          .replace(/~/, "~0")
          .replace(/\//, "~1")
          .replace(/%/, "%25")

      "#/#{array.join("/")}"
    else
      "#"


  get_ref: (uri) ->
    if schema = @references[uri]
      schema
    else
      throw new Error "No schema found for $ref '#{uri}'"

  resolve_ref: (uri) ->
    if schema = @references[uri]
      if !schema.$ref
        return schema
      else
        @resolve_ref(schema.$ref)
    else
      null


  compile_references: (schema, stack=[]) ->
    ref = @construct_ref(stack)
    @references[ref] = schema

    if @test_type "object", schema
      for attribute, definition of schema
        new_stack = stack.concat([attribute])
        switch attribute
          when "$ref"

            # don't try to resolve recursive references
            if ref.indexOf(definition) != 0
              if schema = @resolve_ref(definition)
                @compile_references schema, stack
              else
                throw new Error "Cannot resolve $ref: '#{attribute}'"

          when "type"
            if @test_type "array", definition
              @type_refs definition, new_stack
          when "properties"
            @properties_refs definition, new_stack
          when "patternProperties"
            @pattern_props_refs definition, new_stack
          when "additionalProperties"
            @compile_references definition, new_stack
          when "items"
            @items_refs definition, new_stack
          when "additionalItems"
            @compile_references definition, new_stack
          when "extends"
            @compile_references definition, new_stack
          else
            if !@attributes[attribute] && @test_type "object", definition
              @compile_references definition, stack.concat([attribute])


  type_refs: (union, stack) ->
    for schema, i in union
      if @test_type "object", schema
        @compile_references schema, stack.concat([i.toString()])

  properties_refs: (properties, stack) ->
    for attribute, schema of properties
      @compile_references schema, stack.concat([attribute])
  
  pattern_props_refs: (patterns, stack) ->
    for pattern, schema of patterns
      @compile_references schema, stack.concat([pattern])
    
  items_refs: (definition, stack) ->
    if @test_type "array", definition
      for def, i in definition
        @compile_references def, stack.concat([i.toString()])
    else
      @compile_references definition, stack


  compile: (schema, stack=[]) ->
    ref = @construct_ref(stack)

    tests = []

    if uri = schema.$ref
      if ref.indexOf(uri) == 0
        return @handle_recursion(schema, stack)
      schema = @get_ref(uri)


    if extended = schema.extends
      delete schema.extends
      if @test_type "array", extended
        deap.merge(schema, extended...)
      else
        deap.merge(schema, extended)


    for attribute, definition of schema
      if spec = @attributes[attribute]
        if !spec.ignore
          options =
            stack: stack.concat([attribute])
          if spec.modifiers
            for key in spec.modifiers
              options[key] = schema[key]

          test = @[attribute](definition, options)
          test.ref = @construct_ref options.stack
          tests.push test
      else
        if @test_type "object", definition
          @compile definition, stack.concat([attribute])
        else
          console.log "Unknown attribute: '#{attribute}' is not an object"

    fn = (data) =>
      for test in tests
        if !test(data)
          #console.log "Failed:", test.ref
          return false
      true
    @tests[ref] = fn
    fn


  handle_recursion: (schema, stack) ->
    uri = schema.$ref
    if !@references[uri]
      throw new Error "No schema found for $ref '#{uri}'"
    (data) =>
      @tests[uri](data)


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

