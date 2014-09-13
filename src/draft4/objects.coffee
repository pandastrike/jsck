module.exports =

  # handlers

  required: (definition, context) ->
    tests = []
    for property, i in definition
      new_context = context.child(i)
      tests.push (data, runtime) =>
        unless data.hasOwnProperty(property)
          runtime.error new_context

    (data, runtime) =>
      for test in tests
        test data, runtime

  properties: (definition, context) ->
    if !@test_type "object", definition
      throw new Error "The 'properties' attribute must be an object"
    tests = {}
    for property, schema of definition
      new_context = context.child(property)
      test = @compile(schema, new_context)
      tests[property] = test

    (data, runtime) =>
      if @test_type "object", data
        for property, value of data
          if test = tests[property]
            test value, runtime.child(property)
        true



  minProperties: (definition, context) ->
    (data, runtime) =>
      if @test_type "object", data
        if Object.keys(data).length < definition
          runtime.error context

  maxProperties: (definition, context) ->
    (data, runtime) =>
      if @test_type "object", data
        if Object.keys(data).length > definition
          runtime.error context

