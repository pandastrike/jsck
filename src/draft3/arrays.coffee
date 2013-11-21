module.exports =

  # handlers

  maxItems: (value, context) ->
    (data, runtime) =>
      if @test_type "array", data
        if data.length > value
          runtime.error "maxItems", context

  minItems: (value, context) ->
    (data, runtime) =>
      if @test_type "array", data
        if data.length < value
          runtime.error "minItems", context

  items: (definition, context) ->
    if @test_type "array", definition
      @_tuple_items definition, context
    else
      test = @compile(definition, context)
      # TODO check for array data?
      (data, runtime) =>
        for item, i in data
          test item, runtime.child(i)

  _additionalItems: (definition, context) ->
    if @test_type "object", definition
      test = @compile(definition, context)
    else if definition == false
      test = (data, runtime) ->
        runtime.error "additionalItems", context
    else
      throw new Error "The 'additionalItems' attribute must be an object or false"

  _tuple_items: (definition, context) ->
    {additionalItems} = context.modifiers

    if additionalItems?
      add_item_test = @_additionalItems additionalItems, context
    else
      add_item_test = null

    tests = []
    for schema, i in definition
      tests.push @compile schema, context.child(i.toString())

    (data, runtime) =>
      if @test_type "array", data
        for test, i in tests
          test data[i], runtime.child(i)

        if (data.length > tests.length) && add_item_test
          for item in data.slice(tests.length)
            add_item_test item, runtime.child(i)

  uniqueItems: (definition, context) ->
    console.error "uniqueItems is a no-op"
    null

