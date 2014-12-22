URI = require "../uri"
module.exports =

  extends: (schemas, context) ->
    unless @test_type "array", schemas
      schemas = [schemas]

    for schema, i in schemas
      if (ref = schema.$ref)?
        uri = URI.resolve(context.scope, ref)
        parent = @find(uri)
        if !parent
          throw new Error "No schema found for $ref '#{ref}'"
        else
          schemas[i] = parent

    tests = []
    for schema, i in schemas
      new_context = context.child(i)
      tests.push @compile(new_context, schema)

    (data, runtime) =>
      for test in tests
        test data, runtime

  disallow: (definition, context) ->
    if @test_type "array", definition
      tests = []
      for type, i in definition
        do (i) =>
          if @test_type "object", type
            inverse = @compile context, type
            tests.push (data, runtime) =>
              temp = new runtime.constructor
                pointer: ""
                errors: []
              inverse data, temp
              if temp.errors.length == 0
                runtime.error context, data
          else
            tests.push @disallow type, context

      (data, runtime) =>
        for test in tests
          test data, runtime
    else
      (data, runtime) =>
        if @test_type definition, data
          runtime.error context, data

