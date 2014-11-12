module.exports =

  multipleOf: (value, context) ->
    unless @test_type "number", value
      throw new Error "The 'multipleOf' attribute must be a number"

    (data, runtime) =>
      if @test_type "number", data
        if !((data / value) % 1 == 0)
          runtime.error context

