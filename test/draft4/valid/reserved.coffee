module.exports = ({json_types}) ->

  [

    {
      description: "using known attribute name as a property name"
      schemas: [
        {
          type: "object"
          properties:
            required:
              type: "boolean"
        }
        {
          type: "object"
          properties:
            id:
              type: "string"
        }
      ]
    }

    {
      description: "using known attribute name in definitions"
      debug: true
      schemas: [

        {
          level_zero:
            required:
              type: "object"
            level_one:
              required:
                type: "object"
              level_two:
                required:
                  type: "object"
        }

      ]
    }


  ]


