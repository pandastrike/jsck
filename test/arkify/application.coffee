Testify = require("testify")
assert = require("assert")

{draft4} = require("jsck")
suite = require "json-schema-tests"
schema = require "./complex"
valid = require "./valid_complex"

window.onload = ->
  Testify.reporter = new Testify.DOMReporter("testify", 1000)

  Testify.test "JSCK Browser Testing", (context) ->

    context.test "basic", (context) ->
      validator = new draft4(schema)

      context.test "valid", ->
        result = validator.validate(valid)
        assert.equal result.valid, true

      context.test "invalid", ->
        result = validator.validate
          foo: null
        assert.equal result.valid, false

