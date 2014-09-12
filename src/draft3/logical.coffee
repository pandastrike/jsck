URI = require "../uri"
module.exports =

  extends: (schemas, context) ->
    unless @test_type "array", schemas
      schemas = [schemas]

    for schema, i in schemas
      if ref = schema.$ref
        uri = URI.resolve(context.scope, ref)
        parent = @find(uri)
        if !parent
          throw new Error "No schema found for $ref '#{ref}'"
        else
          schemas[i] = parent

    tests = []
    for schema, i in schemas
      new_context = context.child(i)
      tests.push @compile(schema, new_context)

    (data, runtime) =>
      for test in tests
        test data, runtime

