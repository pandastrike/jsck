module.exports = ({json_types}) ->

  [

    {
      description: "'multipleOf' value MUST be a number"
      schemas: for value in json_types.except("number", "integer")
        multipleOf: value
    }

  ]



