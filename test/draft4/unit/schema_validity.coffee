assert = require "assert"
Testify = require "testify"

{draft4} = require("../../../src/index")

throws = (error, block) ->
  assert.throws(block, error)


Testify.test "Schema validity", (context) ->

  context.test "type", (context) ->
    #https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.2

    context.test "The value of this keyword MUST be either a string or an array", ->
      for value in [ {}, /x/, 0, null, undefined, (->) ]
        throws /must be a string or an array/, ->
          new draft4
            type: value

    context.test "arrays may not be empty", ->
      throws /arrays may not be empty/, ->
        new draft4
          type: []

    context.test "arrays may only contain strings", ->
      for value in [ {}, /x/, 0, null, undefined, (->) ]
        assert.throws ->
          new draft4
            type: [ value ]

    context.test "string values must be one of the primitive types", ->
      throws /is not a primitive/, ->
        new draft4
          type: "smurf"


