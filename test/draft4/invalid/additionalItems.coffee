module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be either a boolean or an object"
      schemas: for value in json_types.except("boolean", "object")
        # additionalItems only takes effect when the value of 'items' is an array
        items: [ {} ]
        additionalItems: value
    }

  ]



