module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be an array"
      schemas: for value in json_types.except("array")
        anyOf: value
    }

    {
      description: "array MUST have at least one element"
      schemas: [
        anyOf: []
      ]
    }

    {
      description: "elements of the array MUST be objects"
      schemas: for value in json_types.except("object")
        anyOf: [ value ]
    }

  ]

