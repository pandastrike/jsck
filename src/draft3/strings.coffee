module.exports =

  pattern: (pattern) ->
    regex = new RegExp(pattern)
    (data) =>
      if !@test_type "string", data
        true
      else
        regex.test(data)

  minLength: (value) ->
    (data) =>
      if !@test_type "string", data
        true
      else
        data.length >= value

  maxLength: (value) ->
    (data) =>
      if !@test_type "string", data
        true
      else
        data.length <= value


