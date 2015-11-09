assert = require "assert"
Testify = require "testify"

JSCK = require("../../src/index").draft4


Testify.test "Ad hoc tests", (context) ->

  context.test "reference to empty schema", ->
    jsck = new JSCK
      type: "object"
      properties:
        foo:
          $ref: "#/definitions/foo"
      definitions:
        foo: {}
    result = jsck.validate {foo: "bar"}
    assert result.valid == true

