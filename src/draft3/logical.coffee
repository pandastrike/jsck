URI = require "../uri"
module.exports =

  extends: (schemas, context) ->
    self = @
    unless self.test_type "array", schemas
      schemas = [schemas]

    for schema, i in schemas
      if (ref = schema.$ref)?
        uri = URI.resolve(context.scope, ref)
        parent = self.find(uri)
        if !parent
          throw new Error "No schema found for $ref '#{ref}'"
        else
          schemas[i] = parent

    tests = []
    for schema, i in schemas
      new_context = context.child(i)
      tests.push self.compile(new_context, schema)

    (data, runtime) ->
      for test in tests
        test data, runtime

  disallow: (definition, context) ->
    self = @
    if self.test_type "array", definition
      tests = []
      for type, i in definition
        do (i) ->
          if self.test_type "object", type
            inverse = self.compile context, type
            tests.push (data, runtime) ->
              temp = new runtime.constructor
                pointer: ""
                errors: []
              inverse data, temp
              if temp.errors.length == 0
                runtime.error context, data
          else
            tests.push self.disallow type, context

      (data, runtime) ->
        for test in tests
          test data, runtime
    else
      (data, runtime) ->
        if self.test_type definition, data
          runtime.error context, data
