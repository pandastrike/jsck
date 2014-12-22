Testify = require "testify"
assert = require "assert"

JSCK = require("../../../src")

jsck = new JSCK.draft4
  definitions:

    assetType:
      type: "string"
      enum: [
        "vote"
        "image"
        "audio"
        "video"
      ]

    campaign:

      base:
        type: "object"
        properties:
          name:
            type: "string"
          metadata:
            type: "object"
          assetTypes:
            type: "array"
            items: {$ref: "#/definitions/assetType"}
          active:
            type: "boolean"
          startTime:
            type: "string"
            format: "date-time"
          endTime:
            type: "string"
            format: "date-time"

      create:
        allOf: [
          {$ref: "#/definitions/campaign/base"}
          {
            required: ["name", "assetTypes"]
          }
        ]


validator = jsck.validator("#/definitions/campaign/create")

Testify.test "using logical keywords", (context) ->

  context.test "allOf", ->

    {errors} = validator.validate
      name: "foobar"
      assetTypes: ["vote"]
      startTime: "monkey"

    assert.equal errors.length, 0, "Unexpected errors:\n#{JSON.stringify(errors, null, 2)}"

  

