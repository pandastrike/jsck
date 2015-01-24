module.exports =

  # handlers

  enum: (definition, context) ->
    self = @
    # TODO: add more cases to the draft3 test suite for enum.js,
    # as they're not doing full coverage
    if self.test_type "array", definition
      (data, runtime) ->
        for value in definition
          return if self.equal(data, value)
        runtime.error context, data
    else
      throw new Error "Value of 'enum' MUST be an Array"

  # helpers

  equal: (got, want) ->
    self = @
    if want instanceof Array
      self.array_equal(got, want)
    else if self.is_object(want)
      self.object_equal(got, want)
    else
      got == want

  array_equal: (got, want) ->
    self = @
    return false unless (got instanceof Array)
    return true if want.length == 0
    return false unless got.length == want.length
    for item, i in want
      return false if !self.equal(got[i], item)
    true

  object_equal: (got, want) ->
    self = @
    return false unless self.is_object(got)
    return false unless Object.keys(got).length == Object.keys(want).length
    for key, value of want
      return false if !self.equal(got[key], value)
    true
