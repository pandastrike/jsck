
module.exports =

  # handlers

  type: (definition, context) ->
    self = @
    if self.test_type "array", definition
      if definition.length == 0
        throw new Error "Invalid 'type': arrays may not be empty"

      tests = []
      for type in definition
        unless self.is_primitive(type)
          throw new Error "Invalid 'type': #{type} is not a primitive type"
        do (type) ->
          tests.push (data, runtime) ->
            self.test_type type, data

      (data, runtime) ->
        valid = false
        for test in tests
          if test(data, runtime)
            valid = true
        if valid == false
          runtime.error context, data

    else if self.test_type "string", definition
      unless self.is_primitive(definition)
        throw new Error "Invalid 'type': #{definition} is not a primitive type"
      (data, runtime) ->
        if !self.test_type definition, data
          runtime.error context, data
    else
      throw new Error "The value of 'type' must be a string or an array"
