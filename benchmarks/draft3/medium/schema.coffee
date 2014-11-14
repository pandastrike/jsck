module.exports =
  description: "A moderately complex schema with some nesting and value constraints"
  type: "object"
  additionalProperties: false
  properties:

    api_server:
      description: "Settings for the HTTP API server"
      type: "object"
      additionalProperties: false
      required: true
      properties:
        url:
          type: "string"
          format: "uri"
          required: true
        host:
          type: "string"
          required: true
        port:
          type: "integer"
          minimum: 1000
          required: true

    transport:
      description: "Settings for the Redis tranport"
      additionalProperties: false
      required: true
      properties:
        server:
          type: "string"
          required: true
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
          type: "string"
          required: true
        database:
          type: "string"
          required: true
        user:
          type: "string"
          required: true
        options:
          type: "object"

    chain:
      description: "Settings for the Chain.com client"
      required: true
      properties:
        api_key_id:
          type: "string"
          required: true
        api_key_secret:
          type: "string"
          required: true

