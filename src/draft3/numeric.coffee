module.exports =

  divisibleBy: (value, context) ->
    (data, runtime) =>
      if @test_type "number", data
        if !((data / value) % 1 == 0)
          runtime.error context

