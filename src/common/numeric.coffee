module.exports =

  minimum: (value, context) ->
    {modifiers: {exclusiveMinimum}} = context
    if exclusiveMinimum
      (data, runtime) =>
        if @test_type "number", data
          if !(data > value)
            runtime.error context, data, description:
              "Value must be > #{value}."
    else
      (data, runtime) =>
        if @test_type "number", data
          if !(data >= value)
            runtime.error context, data, description:
              "Value must be >= #{value}."

  maximum: (value, context) ->
    {modifiers: {exclusiveMaximum}} = context
    if exclusiveMaximum
      (data, runtime) =>
        if @test_type "number", data
          if !(data < value)
            runtime.error context, data, description:
              "Value must be < #{value}."
    else
      (data, runtime) =>
        if @test_type "number", data
          if !(data <= value)
            runtime.error context, data, description:
              "Value must be <= #{value}."

