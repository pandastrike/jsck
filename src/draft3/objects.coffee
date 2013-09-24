module.exports =

  dependencies: (definition) ->
    if !@test_type "object", definition
      throw new Error "Value of 'dependencies' must be an object"
    else
      tests = []
      for property, dependency of definition

        if @test_type "string", dependency
          tests.push (data) =>
            if data[property]
              data[dependency]
            else
              true

        else if @test_type "array", dependency
          tests.push (data) =>
            if data[property]
              for item in dependency
                return false if !data[item]
            true

        else if @test_type "object", dependency
          fn = @compile(dependency)
          tests.push (data) =>
            if data[property]
              fn(data)
            else
              true

        else
          throw new Error "Invalid dependency"

    (data) =>
      if !@test_type "object", data
        true
      else
        for test in tests
          return false if !test(data)
        true


  properties: (definition) ->
    if !@test_type "object", definition
      throw new Error "The 'properties' attribute must be an object"
    tests = {}
    required = []
    for property, schema of definition
      tests[property] = @compile(schema)
      if schema.required == true
        required.push property

    (data) =>
      if !@test_type "object", data
        true
      else
        for property, value of data
          if test = tests[property]
            return false if !test(value)
        for key in required
          return false if !data[key]
        true


  patternProperties: (definition) ->
    if !@test_type "object", definition
      throw new Error "The 'patternProperties' attribute must be an object"

    tests = {}
    for pattern, schema of definition
      tests[pattern] =
        regex: new RegExp(pattern)
        test: @compile(schema)

    (data) =>
      for property, value of data
        for pattern, object of tests
          if object.regex.test(property)
            return false if !object.test(value)
      true


  additionalProperties: (definition, {properties, patternProperties}) ->
    if @test_type "object", definition
      add_prop_test = @compile(definition)
    else if definition == false
      add_prop_test = -> false
    else if definition == undefined
      add_prop_test = null
    else
      throw new Error "The 'additionalProperties' attribute must be an object or false"

    patterns = {}
    for pattern, schema of patternProperties
      patterns[pattern] =
        regex: new RegExp(pattern)
        test: @compile(schema)


    (data) =>
      if !@test_type "object", data
        true
      else
        for property, value of data
          explicit = false
          patterned = false
          if properties[property]
            explicit = true
          else
            if patterns
              for pattern, object of patterns
                if object.regex.test(property)
                  patterned = true
                  return false if !object.test(value)
            if !explicit && !patterned && add_prop_test
              return false if !add_prop_test(value)
        true


