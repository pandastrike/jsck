module.exports =

  pattern: (pattern, context) ->
    self = @
    unless self.test_type "string", pattern
      throw new Error "Value of 'pattern' must be a string"

    regex = new RegExp(pattern)
    (data, runtime) ->
      if self.test_type "string", data
        if !regex.test(data)
          runtime.error context, data

  minLength: (value, context) ->
    self = @
    unless self.test_type "integer", value
      throw new Error "Value of 'minLength' must be an integer"

    (data, runtime) ->
      if self.test_type "string", data
        if !(data.length >= value)
          runtime.error context, data

  maxLength: (value, context) ->
    self = @
    unless self.test_type "integer", value
      throw new Error "Value of 'maxLength' must be an integer"

    (data, runtime) ->
      if self.test_type "string", data
        if !(data.length <= value)
          runtime.error context, data
