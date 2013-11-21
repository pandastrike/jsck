module.exports =

  divisibleBy: (value, context) ->
    (data, runtime) =>
      if @test_type "number", data
        if !((data / value) % 1 == 0)
          runtime.error context

  minimum: (value, context) ->
    {modifiers: {exclusiveMinimum}} = context
    if exclusiveMinimum
      (data, runtime) =>
        if @test_type "number", data
          if !(data > value)
            runtime.error context
    else
      (data, runtime) =>
        if @test_type "number", data
          if !(data >= value)
            runtime.error context

  maximum: (value, context) ->
    {modifiers: {exclusiveMaximum}} = context
    if exclusiveMaximum
      (data, runtime) =>
        if @test_type "number", data
          if !(data < value)
            runtime.error context
    else
      (data, runtime) =>
        if @test_type "number", data
          if !(data <= value)
            runtime.error context

