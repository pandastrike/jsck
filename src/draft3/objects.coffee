module.exports =

  properties: (definition, context) ->
    if !@test_type "object", definition
      throw new Error "The 'properties' attribute must be an object"
    tests = {}
    required = []
    for property, schema of definition
      new_context = context.child(property)
      test = @compile(schema, new_context)
      tests[property] = test
      if schema.required == true
        required.push property

    (data, runtime) =>
      if @test_type "object", data
        for property, value of data
          if test = tests[property]
            test value, runtime.child(property)
        for key in required
          if data[key] == undefined
            runtime.error context.child(key).child("required")
        true



