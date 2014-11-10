module.exports =
  [

    {
      description: "value MUST be either an object or an array"
      schemas: for value in [ "", 2, null, true  ]
        {items: value}
    }

    {
      description: "arrays may only contain objects"
      schemas: for value in [ [], "", 2, null, true  ]
        {items: [value]}
    }

  ]


