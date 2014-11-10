module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be either an object or an array"
      schemas: for value in json_types.except("object", "array")
        {items: value}
    }

    {
      description: "arrays may only contain objects"
      schemas: for value in json_types.except("object")
        {items: [value]}
    }

  ]


