module.exports =

  divisibleBy: (value, context) ->
    (data) =>
      if @test_type "number", data
        (data / value) % 1 == 0
      else
        true

  minimum: (value, {modifiers: {exclusiveMinimum}}) ->
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

  maximum: (value, {modifiers: {exclusiveMaximum}}) ->
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

