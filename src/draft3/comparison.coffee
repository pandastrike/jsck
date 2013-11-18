module.exports =

  # handlers

  enum: (definition, context) ->
    # TODO: add more cases to the draft3 test suite for enum.js,
    # as they're not doing full coverage
    if @test_type "array", values
      (data, runtime) =>
        for value in definition
          return if @equal(data, value)
        runtime.error "enum", context
    else
      throw new Error "Value of 'enum' MUST be an Array"

  # helpers

  equal: (got, want) ->
    if want instanceof Array
      @array_equal(got, want)
    else if @is_object(want)
      @object_equal(got, want)
    else
      got == want

  array_equal: (got, want) ->
    return false unless (got instanceof Array)
    return true if want.length == 0
    return false unless got.length == want.length
    for item, i in want
      return false if !@equal(got[i], item)
    true

  object_equal: (got, want) ->
    return false unless @is_object(got)
    return false unless Object.keys(got).length == Object.keys(want).length
    for key, value of want
      return false if !@equal(got[key], value)
    true

