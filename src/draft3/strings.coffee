module.exports =

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


