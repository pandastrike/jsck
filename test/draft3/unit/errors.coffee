assert = require "assert"
Testify = require "testify"

JSCK = require("../../src/index").draft3

jsck = new JSCK
  type: "object"
  additionalProperties:
    type: "object"
    additionalProperties: false
    properties:
      resource:
        required: true
        type: "string"
      url:
        type: "string"

report = jsck.validate
  smurf: {url: 4}

console.log()
console.log report.errors[0].schema.pointer
console.log()
