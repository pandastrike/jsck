module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be an object"
      schemas: for value in json_types.except("object")
        not: value
    }

  ]


