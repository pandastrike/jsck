fs = require "fs"
glob = require "glob"
assert = require "assert"
Testify = require "testify"

{draft4} = require("../../src/index")

throws = (error, block) ->
  assert.throws(block, error)

Testify.test "Invalid schemas", (context) ->

  files = glob.sync "#{__dirname}/invalid/*.coffee"
  l = "#{__dirname}/invalid/".length

  for file in files
    # chomp .coffee
    attribute_name = file.slice(l, -7)

    context.test attribute_name, (context) ->
      for test in require(file)
        context.test test.description, ->
          for schema in test.schemas
            try
              new draft4(schema)
              context.fail "#{test.description} - #{JSON.stringify schema}"
            catch e

