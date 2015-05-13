module.exports =

  # handlers

  type: (definition, context) ->
    if @test_type "array", definition
      tests = []
      for type in definition
        do (type) =>
          if @test_type "object", type
            test = @compile context, type
            tests.push (data, runtime) =>
              temp = new runtime.constructor
                pointer: ""
                errors: []
              test data, temp
              temp.errors.length == 0
          else
            tests.push (data, runtime) =>
              @test_type type, data

      (data, runtime) =>
        valid = false
        for test in tests
          if test(data, runtime)
            valid = true
        if valid == false
          runtime.error context, data

    else if @test_type "object", definition
      @compile(context, definition)
    else
      (data, runtime) =>
        if !@test_type definition, data
          runtime.error context, data

  # helpers

  is_object: (data) ->
    data? && (typeof data) == "object" &&
      !(data instanceof Array) &&
      !(data instanceof Date)

  is_primitive: (name) ->
    name in ["integer", "number", "string", "object", "array", "boolean", "null"]

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

