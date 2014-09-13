module.exports =

  pattern: (pattern, context) ->
    regex = new RegExp(pattern)
    (data, runtime) =>
      if @test_type "string", data
        if !regex.test(data)
          runtime.error context

  minLength: (value, context) ->
    (data, runtime) =>
      if @test_type "string", data
        if !(data.length >= value)
          runtime.error context

  maxLength: (value, context) ->
    (data, runtime) =>
      if @test_type "string", data
        if !(data.length <= value)
          runtime.error context

