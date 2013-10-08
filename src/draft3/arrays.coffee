module.exports =

  # handlers

  maxItems: (value, context) ->
    (data) =>
      if @test_type "array", data
        data.length <= value
      else
        true

  minItems: (value, context) ->
    (data) =>
      if @test_type "array", data
        data.length >= value
      else
        true

  uniqueItems: (definition, context) ->
    (data) =>
      console.error "uniqueItems is a no-op because I'm protecting you from the Cartesian product"
      console.log context.pointer
      true


  items: (definition, context) ->
    {additionalItems} = context.modifiers
    if @test_type "array", definition
      # This signifies a tuple, not a union

      if additionalItems?
        if (@test_type "object", additionalItems)
          add_item_test = @compile(additionalItems, context)
        else if additionalItems == false
          add_item_test = ->
            false
        else
          throw new Error "The 'additionalItems' attribute must be an object or false"
      else
        add_item_test = null


      tests = []
      for schema, i in definition
        #tests.push @compile(schema, {pointer: "#{pointer}/#{i}"})
        tests.push @compile schema, context.child(i.toString())
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
      test = @compile(definition, context)
      # TODO check for array data?
      (data) =>
        for item in data
          if !test(item)
            return false
        true

