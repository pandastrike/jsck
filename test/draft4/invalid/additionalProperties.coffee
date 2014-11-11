module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be a boolean or an object"
      schemas: for value in json_types.except("boolean", "object")
        additionalProperties: value
    }


  ]

