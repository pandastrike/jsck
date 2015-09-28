assert = require "assert"
Testify = require "testify"

JSCK = require("../../src/index").draft4


Testify.test "Ad hoc tests", (context) ->

  context.test "undefinedness", (context) ->
    jsck = new JSCK
      $schema: "http://json-schema.org/draft-04/schema#"
      type: "object"
      properties:
        foo:
          type: [ "number" ]

    context.test "valid", ->
      result = jsck.validate
        foo: undefined
      assert.equal result.valid, true

      result = jsck.validate
        foo: 42
      assert.equal result.valid, true

      result = jsck.validate Object.create({foo: 42})
      assert.equal result.valid, true


    context.test "invalid", ->
      result = jsck.validate
        foo: null
      assert.equal result.valid, false

  context.test "issue #94 from SciencePiggy", ->
    jsck = new JSCK
      type: "object"
      required: [ "fullName" ]
      properties:
        fullName:
          type: "string"
        settings:
          $ref: "#/definitions/userSettings"

      definitions:
        userSettings:
          type: "object"
          required: [ "language" ]
          properties:
            language:
              type: "string"

    result = jsck.validate
      fullName: "Homer Simpson"
      settings: null

    assert.equal result.valid, false


