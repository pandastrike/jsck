module.exports =

  maxItems: (value) ->
    (data) =>
      if @test_type "array", data
        data.length <= value
      else
        true

  minItems: (value) ->
    (data) =>
      if @test_type "array", data
        data.length >= value
      else
        true

  uniqueItems: (definition) ->
    throw new Error "uniqueItems is unimplemented because I'm protecting you from the Cartesian product"
    (data) =>
      false


  items: (definition, {additionalItems}) ->
    if @test_type "array", definition
      # This signifies a tuple, not a union

      if additionalItems?
        if (@test_type "object", additionalItems)
          add_item_test = @compile(additionalItems)
        else if additionalItems == false
          add_item_test = ->
            false
        else
          throw new Error "The 'additionalItems' attribute must be an object or false"
      else
        add_item_test = null


      tests = (@compile(schema) for schema in definition)
      (data) =>
        if !@test_type "array", data
          true
        else
          for test, i in tests
            return false if !test(data[i])
          if (data.length > tests.length) && add_item_test
            for item in data.slice(tests.length)
              return false if !add_item_test(item)
          true
    else
      test = @compile(definition)
      # TODO check for array data?
      (data) =>
        for item in data
          if !test(item)
            return false
        true

