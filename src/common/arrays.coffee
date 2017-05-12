module.exports =

  # handlers

  maxItems: (value, context) ->
    (data, runtime) =>
      if @test_type "array", data
        if data.length > value
          runtime.error context, data, description:
            "Array must have fewer than #{value} items."

  minItems: (value, context) ->
    (data, runtime) =>
      if @test_type "array", data
        if data.length < value
          runtime.error context, data, description:
            "Array must have more than #{value} items."

  items: (definition, context) ->
    if @test_type "array", definition
      test = @_tuple_items definition, context
    else if @test_type "object", definition
      test = @compile(context, definition)
      # TODO check for array data?
      (data, runtime) =>
        for item, i in data
          test item, runtime.child(i)
        null
    else
      throw new Error "The 'items' attribute must be an object or an array"

  _additionalItems: (definition, context) ->
    if @test_type "object", definition
      test = @compile(context, definition)
    else if definition == false
      test = (data, runtime) ->
        runtime.error context, data, description:
          "Array is supposed to be a tuple, but has too many items."
    else if definition == true
      # valid
    else
      throw new Error "The 'additionalItems' attribute must be an object or false"
    (data, runtime) =>
      for item, i in data
        test item, runtime.child(i)
      null

  _tuple_items: (definition, context) ->
    {additionalItems} = context.modifiers

    if additionalItems?
      add_item_test = @_additionalItems additionalItems,
        context.sibling "additionalItems"
    else
      add_item_test = null

    tests = []
    for schema, i in definition
      unless @test_type "object", schema
        throw new Error "The 'items' attribute must be an object or an array"

      tests.push @compile context.child(i), schema

    (data, runtime) =>
      if @test_type "array", data
        for test, i in tests
          test data[i], runtime.child(i)

        if (data.length > tests.length) && add_item_test
          add_item_test data.slice(tests.length), runtime

  uniqueItems: (definition, context) ->
    null

