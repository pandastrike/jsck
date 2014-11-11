module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be an object"
      schemas: for value in json_types.except("object")
        dependencies: value
    }

    {
      description: "each value MUST be either an object or an array"
      schemas: for value in json_types.except("object", "array")
        dependencies:
          foo: value
    }

    {
      description: "array values must have at least one element"
      schemas: [
        dependencies:
          foo: []
      ]
    }

    {
      description: "array values must contain only strings"
      schemas: [
        dependencies:
          foo: [33]
      ]
    }

  ]

