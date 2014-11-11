module.exports = ({json_types}) ->

  [

    {
      description: "value MUST be an object"
      schemas: for value in json_types.except("object")
        properties: value
    }

    {
      description: "property values must themselves be objects"
      schemas: for value in json_types.except("object")
        properties:
          big: value
    }

  ]

