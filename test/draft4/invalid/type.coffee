module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be either a string or an array"
      schemas: for value in json_types.except("string", "array")
        {type: value}
    }

    {
      description: "arrays may not be empty"
      schemas: [
        {type: []}
      ]
    }

    {
      description: "arrays may only contain strings"
      schemas: for value in json_types.except("string")
        {type: value}
    }

    {
      description: "string values must be one of the primitive types"
      schemas: [
        type: "bogus"
      ]
    }

  ]

