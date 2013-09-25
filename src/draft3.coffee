# TODO: clone the input schema

deap = require "deap"

module.exports = class Validator

  constructor: (@_schema) ->
    @references = {}
    @tests = {}

    @_validate = @compile(@_schema)
    #console.log Object.keys(@references)

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

  compile: (schema, stack=[]) ->
    ref = @construct_ref(stack)
    @references[ref] = schema

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
      #console.log schema

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



  #extends: (schema) ->
    #tests = []
    #for attribute, definition of schema
    #(data) =>
      #throw new Error "Unimplemented"



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

