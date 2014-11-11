module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be an object"
      schemas: for value in json_types.except("object")
        patternProperties: value
    }

    {
      description: "object should not be empty"
      schemas: for value in json_types.except("object")
        patternProperties: {}
    }

    {
      description: "names should be valid regexes"
      schemas: [
        {
          patternProperties:
            "[": {}
        }
      ]
    }

    {
      description: "object values MUST themselves be objects"
      schemas: for value in json_types.except("object")
        patternProperties:
          foo: value
    }


  ]

