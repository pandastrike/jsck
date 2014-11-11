module.exports = ({json_types}) ->

  [

    {
      description: "'pattern' value must be a string"
      schemas: for value in json_types.except("string")
        pattern: value
    }

    {
      description: "'maxLength' value must be an integer"
      schemas: for value in json_types.except("integer")
        maxLength: value
    }

    {
      description: "'minLength' value must be an integer"
      schemas: for value in json_types.except("integer")
        minLength: value
    }


  ]



