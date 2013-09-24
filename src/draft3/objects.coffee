module.exports =

  properties: (definition, {additionalProperties, patternProperties}) ->
    if !@test_type "object", definition
      throw new Error "The 'properties' attribute must be an object"

    pattern_tests = {}
    if patternProperties? && @test_type("object", patternProperties)
      for pattern, schema of patternProperties
        pattern_tests[pattern] =
          regex: new RegExp(pattern)
          test: @compile(schema)
    else if patternProperties == undefined
    else
      throw new Error "The 'patternProperties' attribute must be an object"

    if @test_type "object", additionalProperties
      add_prop_test = @compile(additionalProperties)
    else if additionalProperties == false
      add_prop_test = -> false
    else if additionalProperties == undefined
      add_prop_test = null
    else
      throw new Error "The 'additionalProperties' attribute must be an object or false"

    tests = {}
    for property, schema of definition
      tests[property] = @compile(schema)

    if @test_type "object", additionalProperties
      add_prop_test = @compile(additionalProperties)
    else if additionalProperties == false
      add_prop_test = -> false

    (data) =>
      if !@test_type "object", data
        true
      else
        for property, value of data
          explicit = false
          patterned = false
          if test = tests[property]
            explicit = true
            return false if !test(value)

          for pattern, object of pattern_tests
            if object.regex.test(property)
              patterned = true
              return false unless object.test(value)
          if !patterned && !explicit && add_prop_test
            return false if !add_prop_test(value)
        true

  patternProperties: (definition, {properties}) ->
    (data) =>
      true

  additionalProperties: (definition, {properties, additionalProperties}) ->
    (data) =>
      true



