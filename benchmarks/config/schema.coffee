module.exports =
  description: "A moderately complex schema with some nesting and value constraints"
  type: "object"
  additionalProperties: false
  properties:

    api_server:
      description: "Settings for the HTTP API server"
      required: true
      type: "object"
      additionalProperties: false
      properties:
        url:
          required: true
          type: "string"
          format: "uri"
        host:
          required: true
          type: "string"
        port:
          required: true
          type: "integer"
          minimum: 1000

    transport:
      description: "Settings for the Redis tranport"
      required: true
      additionalProperties: false
      properties:
        server:
          required: true
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
      required: true
      properties:
        server:
          required: true
          type: "string"
        database:
          required: true
          type: "string"
        user:
          required: true
          type: "string"
        options:
          type: "object"

    chain:
      description: "Settings for the Chain.com client"
      required: true
      properties:
        api_key_id:
          required: true
          type: "string"
        api_key_secret:
          required: true
          type: "string"

