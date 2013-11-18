module.exports =

  # handlers

  type: (definition, context) ->
    if @test_type "array", definition
      tests = []
      for type in definition
        tests.push @type(type, context)

      (data, runtime) =>
        for test, i in tests
          test data, runtime.child(i)

    else if @test_type "object", definition
      @compile(definition, context)
    else
      (data, runtime) =>
        if !@test_type definition, data
          runtime.error "type", context

  disallow: (definition, context) ->
    if @test_type "array", definition
      tests = []
      for type, i in definition
        do (i) =>
          if @test_type "object", type
            inverse = @compile type, context.child(i)
            tests.push (data, runtime) =>
              temp = new runtime.constructor
                pointer: ""
                errors: []
              inverse data, temp
              if temp.errors.length == 0
                runtime.error "disallow schema", context.child(i)
          else
            tests.push @disallow type, context.child(i)

      (data, runtime) =>
        for test in tests
          test data, runtime
    else
      (data, runtime) =>
        if @test_type definition, data
          runtime.error "disallow", context

  # helpers

  is_object: (data) ->
    data? && (typeof data) == "object" &&
      !(data instanceof Array) &&
      !(data instanceof Date)

  test_type: (type_name, data) ->
    switch type_name
      when "integer"
        typeof(data) == "number" && data % 1 == 0
      when "number"
        typeof(data) == "number"
      when "string"
        typeof(data) == "string"
      when "object"
        @is_object(data)
      when "array"
        data instanceof Array
      when "boolean"
        typeof data == "boolean"
      when "null"
        data == null
      when "any"
        true
      else
        throw new Error "Bad type: '#{type_name}'"

