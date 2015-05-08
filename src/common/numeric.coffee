module.exports =

  minimum: (value, context) ->
    self = @
    {modifiers: {exclusiveMinimum}} = context
    if exclusiveMinimum
      (data, runtime) ->
        if self.test_type "number", data
          if !(data > value)
            runtime.error context, data
    else
      (data, runtime) ->
        if self.test_type "number", data
          if !(data >= value)
            runtime.error context, data

  maximum: (value, context) ->
    self = @
    {modifiers: {exclusiveMaximum}} = context
    if exclusiveMaximum
      (data, runtime) ->
        if self.test_type "number", data
          if !(data < value)
            runtime.error context, data
    else
      (data, runtime) ->
        if self.test_type "number", data
          if !(data <= value)
            runtime.error context, data
