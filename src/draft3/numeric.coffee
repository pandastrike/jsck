module.exports =

  divisibleBy: (value) ->
    (data) =>
      if @test_type "number", data
        (data / value) % 1 == 0
      else
        true

  minimum: (value) ->
    # TODO: handle exclusiveMinimum
    (data) =>
      if @test_type "number", data
        data >= value
      else
        true

  maximum: (value) ->
    # TODO: handle exclusiveMaximum
    (data) =>
      if @test_type "number", data
        data <= value
      else
        true

