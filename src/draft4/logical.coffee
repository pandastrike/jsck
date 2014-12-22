
module.exports =

  anyOf: (definition, context) ->
    unless @test_type "array", definition
      throw new Error "The 'anyOf' attribute must be an array"
    if definition.length == 0
      throw new Error "The 'anyOf' array may not be empty"

    tests = []
    for schema, i in definition
      unless @test_type "object", schema
        throw new Error "The 'anyOf' array values must be objects"
      new_context = context.child(i)
      tests.push @compile(new_context, schema)

    (data, runtime) =>
      answer = tests.some (test) =>
        temp = new runtime.constructor
          pointer: ""
          errors: []
        test(data, temp)
        temp.errors.length == 0

      unless answer
        runtime.error context, data


  # Note from author of draft4 on how allOf works w/r/t additionalProperties
  # http://stackoverflow.com/questions/22689900/json-schema-allof-with-additionalproperties/23001194#23001194
  # also https://github.com/fge/json-schema-validator/issues/88
  allOf: (definition, context) ->
    unless @test_type "array", definition
      throw new Error "The 'allOf' attribute must be an array"
    if definition.length == 0
      throw new Error "The 'allOf' array may not be empty"

    # TODO: check for proper error reporting.  Do we need to create new
    # runtimes, contexts, etc.?
    tests = []
    for schema, i in definition
      unless @test_type "object", schema
        throw new Error "The 'allOf' array values must be objects"

      new_context = context.child(i)
      tests.push @compile(new_context, schema)

    (data, runtime) =>
      for test in tests
        test data, runtime
      null

  oneOf: (definition, context) ->
    unless @test_type "array", definition
      throw new Error "The 'oneOf' attribute must be an array"

    if definition.length == 0
      throw new Error "The 'oneOf' array may not be empty"

    tests = []
    for schema, i in definition
      unless @test_type "object", schema
        throw new Error "The 'oneOf' array values must be objects"

      new_context = context.child(i)
      tests.push @compile(new_context, schema)

    # TODO optimize?
    (data, runtime) =>
      valids = 0
      for test in tests
        temp = new runtime.constructor
          pointer: ""
          errors: []
        test(data, temp)
        if temp.errors.length == 0
          valids++
      if valids != 1
        runtime.error context, data



  not: (definition, context) ->
    unless @test_type "object", definition
      throw new Error "The 'not' attribute must be an object"

    inverse = @compile context, definition
    (data, runtime) =>
      temp = new runtime.constructor
        pointer: ""
        errors: []
      inverse data, temp
      if temp.errors.length == 0
        runtime.error context, data

