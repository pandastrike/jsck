assert = require "assert"
Testify = require "testify"

JSCK = require("../../src/index").draft3


Testify.test "Built in schemas", (context) ->

  context.test "$ref to draft 3 works", ->
    jsck = new JSCK
      type: "object"
      properties:
        foo:
          $ref: "http://json-schema.org/draft-03/schema#"

    report = jsck.validate
      foo:
        properties: {}
    assert.equal report.valid, true

    report = jsck.validate
      foo:
        properties: "smurf"
    assert.equal report.valid, false



