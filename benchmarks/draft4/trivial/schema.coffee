module.exports =
  description: "A simple schema, exercising very few attributes"
  type: "object"
  additionalProperties: false
  required: ["origin", "name", "tags", "timestamp", "data"]
  properties:
    origin:
      type: "string"
    name:
      type: "string"
    tags:
      type: "array"
      items: {type: "string"}
    timestamp:
      type: "integer"
      format: "utc-millisec"
    data: { type: "object" }

