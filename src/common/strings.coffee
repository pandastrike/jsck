module.exports =

  pattern: (pattern, context) ->
    unless @test_type "string", pattern
      throw new Error "Value of 'pattern' must be a string"

    regex = new RegExp(pattern)
    (data, runtime) =>
      if @test_type "string", data
        if !regex.test(data)
          runtime.error context, data, description:
            "String did not match regex pattern."

  minLength: (value, context) ->
    unless @test_type "integer", value
      throw new Error "Value of 'minLength' must be an integer"

    (data, runtime) =>
      if @test_type "string", data
        if !(data.length >= value)
          runtime.error context, data, description:
            "String must be longer than #{value} bytes."

  maxLength: (value, context) ->
    unless @test_type "integer", value
      throw new Error "Value of 'maxLength' must be an integer"

    (data, runtime) =>
      if @test_type "string", data
        if !(data.length <= value)
          runtime.error context, data, description:
            "String must be smaller than #{value} bytes."

