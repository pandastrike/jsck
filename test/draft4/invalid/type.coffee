module.exports =
  [

    {
      description: "value MUST be either a string or an array"
      schemas: for value in [ {}, 0, null  ]
        {type: value}
    }

    {
      description: "arrays may not be empty"
      schemas: [
        {type: []}
      ]
    }

    {
      description: "arrays may only contain strings"
      schemas: for value in [ {}, 0, null, [] ]
        {type: value}
    }

    {
      description: "string values must be one of the primitive types"
      schemas: [
        type: "bogus"
      ]
    }

  ]

