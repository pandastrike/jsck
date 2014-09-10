module.exports =
  $schema: {ignore: true}
  id: {ignore: true}
  $ref: { ignore: true }

  default: {ignore: true}

  type: {}
  enum: {}

  not: {}
  allOf: {}

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
