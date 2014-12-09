glob = require "glob"
assert = require "assert"
Testify = require "testify"

{draft4} = require("../../src/index")

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

Testify.test "Accepting valid schemas", (context) ->

  files = glob.sync("#{__dirname}/valid/*.coffee").sort()
  l = "#{__dirname}/valid/".length

  for file in files
    # chomp .coffee
    attribute_name = file.slice(l, -7)

    context.test attribute_name, (context) ->
      tests = require(file)
      # Dependency injection, where needed
      if tests.constructor == Function
        tests = tests(helpers)

      for name, test of tests
        context.test name, (context) ->
          for k, schema of test.schemas
            context.test k, ->
              try
                new draft4(schema)
              catch e
                console.log e.stack
                context.fail(e)



