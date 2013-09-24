module.exports =

  type: (definition) ->
    if @test_type "array", definition
      tests = []
      for type in definition
        tests.push @type(type)

      (data) =>
        for test in tests
          return true if test(data)
        false
    else if @test_type "object", definition
      @compile(definition)
    else
      (data) =>
        @test_type(definition, data)

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
