module.exports =
  description: "A moderately complex schema with some nesting and value constraints"
  type: "object"
  additionalProperties: false
  required: ["api_server", "transport", "storage", "chain"]
  properties:

    api_server:
      description: "Settings for the HTTP API server"
      type: "object"
      additionalProperties: false
      required: ["url", "host", "port"]
      properties:
        url:
          type: "string"
          format: "uri"
        host:
          type: "string"
        port:
          type: "integer"
          minimum: 1000

    transport:
      description: "Settings for the Redis tranport"
      additionalProperties: false
      required: ["server"]
      properties:
        server:
          type: "string"
        options:
          type: "object"
        queues:
          properties:
            blocking_timeout:
              type: "integer"
              minimum: 0

    storage:
      description: "Settings for the PostgreSQL storage"
      required: ["server", "database", "user"]
      properties:
        server:
          type: "string"
        database:
          type: "string"
        user:
          type: "string"
        options:
          type: "object"

    chain:
      description: "Settings for the Chain.com client"
      required: ["api_key_id", "api_key_secret"]
      properties:
        api_key_id:
          type: "string"
        api_key_secret:
          type: "string"

