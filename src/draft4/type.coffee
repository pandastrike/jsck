
module.exports =

  # handlers

  type: (definition, context) ->
    if @test_type "array", definition
      if definition.length == 0
        throw new Error "Invalid 'type': arrays may not be empty"

      tests = []
      for type in definition
        unless @is_primitive(type)
          throw new Error "Invalid 'type': #{type} is not a primitive type"
        do (type) =>
          tests.push (data, runtime) =>
            @test_type type, data

      (data, runtime) =>
        valid = false
        for test in tests
          if test(data, runtime)
            valid = true
        if valid == false
          runtime.error context

    else if @test_type "string", definition
      unless @is_primitive(definition)
        throw new Error "Invalid 'type': #{definition} is not a primitive type"
      (data, runtime) =>
        if !@test_type definition, data
          runtime.error context
    else
      throw new Error "The value of 'type' must be a string or an array"

