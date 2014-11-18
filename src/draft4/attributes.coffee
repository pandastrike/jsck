module.exports =
  $schema: {}
  id: {}

  type: {}
  enum: {}

  not: {}
  anyOf: {}
  allOf: {}
  oneOf: {}

  properties: {}
  required: {}
  dependencies: {}
  minProperties: {}
  maxProperties: {}
  patternProperties:
    modifiers: [
      "additionalProperties"
    ]
  additionalProperties:
    modifiers: [
      "properties"
      "patternProperties"
    ]

  items:
    modifiers: [
      "additionalItems"
    ]
  maxItems: {}
  minItems: {}
  additionalItems: {}
  uniqueItems: {}


  minimum:
    modifiers: [
      "exclusiveMinimum"
    ]
  maximum:
    modifiers: [
      "exclusiveMaximum"
    ]
  multipleOf: {}

  maxLength: {}
  minLength: {}
  pattern: {}
  format: {}
