module.exports = ({json_types}) ->

  "known attribute name":
    schemas:

      required:
        type: "object"
        properties:
          required:
            type: "boolean"

      id:
        type: "object"
        properties:
          id:
            type: "string"

      properties:
        type: "object"
        properties:
          properties: {type: "array"}



