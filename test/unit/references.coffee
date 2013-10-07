assert = require "assert"
Testify = require "testify"

Validator = require("../../src/index").draft3

schema =
  id: "urn:jsck.test"
  type: "object"
  properties:
    user_list:
      id: "#user_list"
      type: "array"
      items: {$ref: "#/properties/user"}

    user:
      id: "#user"
      type: "object"
      properties:
        name:
          required: true
          type: "string"
        email:
          type: "string"


Testify.test "validating by schema reference", (context) ->

  context.test "explicit path", ->
    validator = new Validator(schema)
    result = validator.validate_schema "urn:jsck.test#/properties/user", {name: "automatthew"}
    assert.equal result.valid, true

  context.test "declared id", ->
    # http://json-schema.org/latest/json-schema-core.html#anchor31
    validator = new Validator(schema)
    result = validator.validate_schema "urn:jsck.test#user", {name: "automatthew"}
    assert.equal result.valid, true

