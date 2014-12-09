glob = require "glob"
assert = require "assert"
Testify = require "testify"

{draft4} = require("../../src/index")

[_, _, single_attr] = process.argv

helpers =
  json_types:
    values:
      integer: 2
      number: 2.1
      string: "foo"
      object: {}
      array: [ ]
      boolean: false
      null: null
    except: (names...) ->
      for name, value of @values when !(name in names)
        value

Testify.test "Rejecting invalid schemas", (context) ->

  files = glob.sync("#{__dirname}/invalid/*.coffee").sort()
  l = "#{__dirname}/invalid/".length

  for file in files
    # chomp .coffee
    attribute_name = file.slice(l, -7)

    if single_attr && attribute_name != single_attr
      continue

    context.test attribute_name, (context) ->
      tests = require(file)
      # Dependency injection, where needed
      if tests.constructor == Function
        tests = tests(helpers)
      for test in tests
        context.test test.description, ->
          for schema in test.schemas
            try
              new draft4(schema)
              context.fail "#{test.description} - #{JSON.stringify schema}"
            catch e
              if test.debug
                console.log "\n", attribute_name, "-", test.description
                console.log schema
                console.log e.stack


