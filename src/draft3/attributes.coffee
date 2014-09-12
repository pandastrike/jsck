module.exports =

  type: {}
  enum: {}
  disallow: {}

  properties: {}
  dependencies: {}
  extends: {}

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
  divisibleBy: {}

  maxLength: {}
  minLength: {}
  pattern: {}
  format: {}
