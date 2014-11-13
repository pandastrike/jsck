module.exports =

  # handlers

  required: (definition, context) ->
    unless @test_type "array", definition
      throw new Error "The 'required' attribute must be an array"

    if definition.length == 0
      throw new Error "The 'required' array must have at least one element"

    for property, i in definition
      unless @test_type "string", property
        throw new Error "The 'required' array may only contain strings"

    (data, runtime) =>
      for property, i in definition
        if data[property] == undefined
          runtime.error context.child(i)
      null

  properties: (definition, context) ->
    unless @test_type "object", definition
      throw new Error "The 'properties' attribute must be an object"

    tests = {}
    for property, schema of definition
      unless @test_type "object", schema
        throw new Error "The 'properties' attribute must be an object"

      new_context = context.child(property)
      test = @compile(schema, new_context)
      tests[property] = test

    (data, runtime) =>
      if (typeof data) == "object" && !(data instanceof Array)
        for property, value of data
          if test = tests[property]
            test value, runtime.child(property)
        null



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

  dependencies: (definition, context) ->
    unless @test_type "object", definition
      throw new Error "Value of 'dependencies' must be an object"
    else
      tests = []
      for property, dependency of definition

        if @test_type "array", dependency
          if dependency.length == 0
            throw new Error "Arrays in 'dependencies' may not be empty"

          for name in dependency
            unless @test_type "string", name
              throw new Error "Vales of 'dependencies' arrays must be strings"
          tests.push (data, runtime) =>
            if data[property]?
              for item in dependency
                if !data[item]?
                  runtime.child(property).error context

        else if @test_type "object", dependency
          fn = @compile dependency, context
          tests.push (data, runtime) =>
            if data[property]
              fn data, runtime
            else
              true

        else
          throw new Error "Invalid dependency"

    (data, runtime) =>
      if @test_type "object", data
        for test in tests
          test data, runtime
      null


