
module.exports = class Validator

  constructor: (@_schema) ->
    @_validate = @compile(@_schema)

  validate: (data) ->
    result =
      valid: @_validate(data)

  compile: (schema) ->
    tests = []

    for property, definition of schema
      # TODO: if we wish to support annoying features like exclusiveMinimum,
      # we'll have to dispatch to handlers in a more intelligent way.
      # http://tools.ietf.org/html/draft-zyp-json-schema-03#section-5.12
      if @[property]
        tests.push @[property](definition)
      else
        throw new Error "Unknown attribute: '#{property}'"

    (data) =>
      valid = true
      for test in tests
        valid = test(data)
      valid

  items: (definition) ->
    if @test_type "array", definition
      # This signifies a tuple, not a union
      tests = []
      for schema in definition
        tests.push @compile(schema)
      (data) =>
        if @test_type "array", data
          for test, i in tests
            return false if !test(data[i])
          true
        else
          true
    else
      test = @compile(definition)
      (data) =>
        for item in data
          if !test(item)
            return false
        true


  enum: (values) ->
    # TODO: add more cases to the draft3 test suite for enum.js,
    # as they're not doing full coverage
    if @test_type "array", values
      (data) =>
        for value in values
          return true if @equal(data, value)
        false
    else
      throw new Error "Value of 'enum' MUST be an Array"



modules = [
  "type"
  "numeric"
  "comparison"
]

for module_name in modules
  m = require "./draft3/#{module_name}"
  for name, method of m
    Validator.prototype[name] = method

