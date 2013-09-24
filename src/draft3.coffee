

module.exports = class Validator

  constructor: (@_schema) ->
    @_validate = @compile(@_schema)

  validate: (data) ->
    result =
      valid: @_validate(data)

  attributes:
    type: {}
    enum: {}
    disallow: {}
    items:
      modifiers: [
        "additionalItems"
      ]
    maxItems: {}
    minItems: {}
    properties:
      modifiers: [
        "additionalProperties"
        "patternProperties" # additive
      ]
    minimum:
      modifiers: [
        "exclusiveMinimum"
      ]
    maximum:
      modifiers: [
        "exclusiveMaximum"
      ]
    divisibleBy: {}

    exclusiveMinimum:
      ignore: true
    exclusiveMaximum:
      ignore: true
    patternProperties:
      ignore: true
    additionalProperties:
      ignore: true
    additionalItems:
      ignore: true

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
      valid = true
      for test in tests
        valid = test(data)
      valid



modules = [
  "type"
  "numeric"
  "comparison"
  "arrays"
  "objects"
]

for module_name in modules
  m = require "./draft3/#{module_name}"
  for name, method of m
    Validator.prototype[name] = method

