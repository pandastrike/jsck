module.exports =

  # handlers

  dependencies: (definition, context) ->
    if !@test_type "object", definition
      throw new Error "Value of 'dependencies' must be an object"
    else
      tests = []
      for property, dependency of definition

        if @test_type "string", dependency
          tests.push (data, runtime) =>
            if data[property]? && !data[dependency]?
              runtime.error "dependencies", context

        else if @test_type "array", dependency
          tests.push (data, runtime) =>
            if data[property]?
              for item in dependency
                if !data[item]?
                  runtime.error "dependencies", context

        else if @test_type "object", dependency
          fn = @compile dependency, context.child(property)
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
            runtime.error "required", runtime.child(property).child("required")
        true


  patternProperties: (definition, context) ->
    {additionalProperties} = context.modifiers
    if additionalProperties
      # The additionalProperties compiler runs the patternProperties
      # validation. This is necessary because properties are not considered
      # additional if they match a pattern.
      return null

    if !@test_type "object", definition
      throw new Error "The 'patternProperties' attribute must be an object"

    tests = {}
    for pattern, schema of definition
      tests[pattern] =
        regex: new RegExp(pattern)
        test: @compile schema, context.child(pattern)

    (data, runtime) =>
      for property, value of data
        for pattern, object of tests
          if object.regex.test(property)
            object.test value, runtime.child(property)


  additionalProperties: (definition, context) ->
    {properties, patternProperties} = context.modifiers
    if @test_type "object", definition
      add_prop_test = @compile(definition, context)
    else if definition == false
      add_prop_test = (data, runtime) =>
        runtime.error "additionalProperties", context
    else if definition == undefined
      add_prop_test = null
    else
      throw new Error "The 'additionalProperties' attribute must be an object or false"

    patterns = {}
    for pattern, schema of patternProperties
      patterns[pattern] =
        regex: new RegExp(pattern)
        test: @compile(schema, context.child(pattern))


    (data, runtime) =>
      if @test_type "object", data
        for property, value of data
          explicit = false
          patterned = false
          if properties?[property]
            explicit = true
          if patterns
            for pattern, object of patterns
              if object.regex.test(property)
                patterned = true
                object.test value, runtime.child(property)
          if !explicit && !patterned && add_prop_test
            add_prop_test value, runtime.child(property)



