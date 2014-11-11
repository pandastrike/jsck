module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be an array"
      schemas: for value in json_types.except("array")
        allOf: value
    }

    {
      description: "array MUST have at least one element"
      schemas: [
        allOf: []
      ]
    }

    {
      description: "elements of the array MUST be objects"
      schemas: for value in json_types.except("object")
        allOf: [ value ]
    }

  ]

