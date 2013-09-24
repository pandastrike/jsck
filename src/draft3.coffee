

module.exports = class Validator

  constructor: (@_schema) ->
    @_validate = @compile(@_schema)

  validate: (data) ->
    result =
      valid: @_validate(data)

  attributes:
    $ref: {}
    extends: {}
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


  compile: (schema) ->
    tests = []

    for attribute, definition of schema
      if spec = @attributes[attribute]
        if !spec.ignore
          options = {}
          if spec.modifiers
            for key in spec.modifiers
              options[key] = schema[key]
          tests.push @[attribute](definition, options)
      else
        throw new Error "Unknown attribute: '#{attribute}'"

    (data) =>
      for test in tests
        return false if !test(data)
      true

  $ref: (uri) ->
    console.log "\n", uri
    (data) =>
      false

  extends: (schema) ->
    (data) =>
      throw new Error "Unimplemented"



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

