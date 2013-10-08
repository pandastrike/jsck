module.exports =

  # handlers

  type: (definition, {pointer_scope}) ->
    if @test_type "array", definition
      tests = []
      for type in definition
        tests.push @type(type, {pointer_scope})

      (data) =>
        for test in tests
          return true if test(data)
        false
    else if @test_type "object", definition
      @compile(definition, {pointer_scope})
    else
      (data) =>
        @test_type(definition, data)

  disallow: (definition, {pointer_scope}) ->
    if @test_type "array", definition
      tests = (@type(type, {pointer_scope}) for type in definition)
      (data) =>
        for test in tests
          return false if test(data)
        true
    else
      (data) =>
        !@test_type(definition, data)

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

