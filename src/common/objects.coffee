module.exports =

  # handlers

  dependencies: (definition, context) ->
    unless @test_type "object", definition
      throw new Error "Value of 'dependencies' must be an object"
    else
      tests = []
      for property, dependency of definition

        if @test_type "string", dependency
          tests.push (data, runtime) =>
            if data[property]? && !data[dependency]?
              runtime.child(property).error context

        else if @test_type "array", dependency
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


  patternProperties: (definition, context) ->
    {additionalProperties} = context.modifiers
    if additionalProperties
      # The additionalProperties compiler runs the patternProperties
      # validation. This is necessary because properties are not considered
      # additional if they match a pattern.
      return null

    if !@test_type "object", definition
      throw new Error "The 'patternProperties' attribute must be an object"

    if Object.keys(definition).length == 0
      throw new Error "The 'patternProperties' object should not be empty"

    tests = {}
    for pattern, schema of definition
      unless @test_type "object", schema
        throw new Error "Values of 'patternProperties' must be an objects"

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
        runtime.error context
    else if definition == undefined
      add_prop_test = null
    else
      throw new Error "The 'additionalProperties' attribute must be an object or false"

    patterns = {}
    for pattern, schema of patternProperties
      patterns[pattern] =
        regex: new RegExp(pattern)
        test: @compile(schema, context.sibling("patternProperties").child(pattern))


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



