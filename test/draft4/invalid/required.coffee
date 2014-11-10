module.exports = ({json_types}) ->
  [

    {
      description: "value MUST be an array"
      schemas: for value in json_types.except("array")
        required: value
    }

    {
      description: "the array must have at least one value"
      schemas: [
        required: []
      ]
    }

    {
      description: "the array values must be strings"
      schemas: for value in json_types.except("string")
        required: [value]
    }

  ]




