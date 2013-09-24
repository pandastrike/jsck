module.exports =

  divisibleBy: (value) ->
    (data) =>
      if @test_type "number", data
        (data / value) % 1 == 0
      else
        true

  minimum: (value, {exclusiveMinimum}) ->
    if exclusiveMinimum
      (data) =>
        if @test_type "number", data
          data > value
        else
          true
    else
      (data) =>
        if @test_type "number", data
          data >= value
        else
          true

  maximum: (value, {exclusiveMaximum}) ->
    if exclusiveMaximum
      (data) =>
        if @test_type "number", data
          data < value
        else
          true
    else
      (data) =>
        if @test_type "number", data
          data <= value
        else
          true

