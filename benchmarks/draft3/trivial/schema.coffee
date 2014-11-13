module.exports =
  description: "A simple schema, exercising very few attributes"
  type: "object"
  additionalProperties: false
  properties:
    origin:
      required: true
      type: "string"
    name:
      type: "string"
      required: true
    tags:
      type: "array"
      items: {type: "string"}
    timestamp:
      type: "integer"
      format: "utc-millisec"
    data: { type: "object" }

