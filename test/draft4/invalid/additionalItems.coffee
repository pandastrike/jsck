module.exports = [

  {
    description: "value MUST be either a boolean or an object"
    schemas: for value in [ [], "", 2, null ]
      # additionalItems only takes effect when the value of 'items' is an array
      items: [ {} ]
      additionalItems: value
  }

]



