
module.exports =

  anyOf: (definition, context) ->
    unless @test_type "array", definition
      throw new Error "The 'allOf' attribute must be an array"
    tests = []
    for schema, i in definition
      new_context = context.child(i)
      tests.push @compile(schema, new_context)

    (data, runtime) =>
      answer = tests.some (test) =>
        temp = new runtime.constructor
          pointer: ""
          errors: []
        test(data, temp)
        temp.errors.length == 0

      unless answer
        runtime.error(context)



  allOf: (definition, context) ->
    unless @test_type "array", definition
      throw new Error "The 'allOf' attribute must be an array"
    # TODO: check for proper error reporting
    tests = []
    for schema, i in definition
      new_context = context.child(i)
      tests.push @compile(schema, new_context)

    (data, runtime) =>
      for test in tests
        test data, runtime

  not: (definition, context) ->
    unless @test_type "object", definition
      throw new Error "The 'not' attribute must be an object"

    inverse = @compile definition, context
    (data, runtime) =>
      temp = new runtime.constructor
        pointer: ""
        errors: []
      inverse data, temp
      if temp.errors.length == 0
        runtime.error context

  # removed from the specification, but preserved here in case I
  # need to cannibalize it
  disallow: (definition, context) ->
    if @test_type "array", definition
      tests = []
      for type, i in definition
        do (i) =>
          if @test_type "object", type
            inverse = @compile type, context
            tests.push (data, runtime) =>
              temp = new runtime.constructor
                pointer: ""
                errors: []
              inverse data, temp
              if temp.errors.length == 0
                runtime.error context
          else
            tests.push @disallow type, context

      (data, runtime) =>
        for test in tests
          test data, runtime
    else
      (data, runtime) =>
        if @test_type definition, data
          runtime.error context
