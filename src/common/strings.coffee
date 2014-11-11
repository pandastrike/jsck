module.exports =

  pattern: (pattern, context) ->
    unless @test_type "string", pattern
      throw new Error "Value of 'pattern' must be a string"

    regex = new RegExp(pattern)
    (data, runtime) =>
      if @test_type "string", data
        if !regex.test(data)
          runtime.error context

  minLength: (value, context) ->
    unless @test_type "integer", value
      throw new Error "Value of 'minLength' must be an integer"

    (data, runtime) =>
      if @test_type "string", data
        if !(data.length >= value)
          runtime.error context

  maxLength: (value, context) ->
    unless @test_type "integer", value
      throw new Error "Value of 'maxLength' must be an integer"

    (data, runtime) =>
      if @test_type "string", data
        if !(data.length <= value)
          runtime.error context

