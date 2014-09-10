module.exports =
  $schema: {ignore: true}
  id: {ignore: true}
  $ref: { ignore: true }

  default: {ignore: true}

  type: {}
  enum: {}

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
  multipleOf: {}

  maxLength: {}
  minLength: {}
  pattern: {}
  format: {}
