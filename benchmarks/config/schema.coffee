module.exports =
  #id: "urn:generic:configuration#"
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
          type: "string"
        port:
          type: "integer"

    transport:
      description: "Settings for the Redis tranport"
      required: true
      additionalProperties: false
      properties:
        server:
          type: "string"
        options:
          type: "object"
        queues:
          properties:
            blocking_timeout:
              type: "integer"

    storage:
      description: "Settings for the PostgreSQL storage"
      required: true
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
      required: true
      properties:
        api_key_id:
          type: "string"
        api_key_secret:
          type: "string"

