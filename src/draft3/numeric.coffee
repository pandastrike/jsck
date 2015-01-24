module.exports =

  divisibleBy: (value, context) ->
    self = @
    (data, runtime) ->
      if self.test_type "number", data
        if !((data / value) % 1 == 0)
          runtime.error context, data
