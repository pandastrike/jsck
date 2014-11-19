
JSCK = require "../../../src/draft4"
schema = require "./schema"
valid_doc = require "./valid_doc"

schema =
  type: "array"
  items: {$ref: "#smurf"}
  minItems: 1

  definitions:

    smurf:
      id: "#smurf"
      type: "object"


valid_doc = [
  {}
]

jsck = new JSCK(schema)
report = jsck.validate(valid_doc)
console.log "JSCK"
console.log JSON.stringify(report, null, 2)

ZSchema = require("z-schema")
validator = new ZSchema()

console.log "ZSchema"
console.log validator.validate(valid_doc, schema)
console.log validator.getLastErrors()

console.log "JSONSchema"
JSONSchema = require('jsonschema').Validator
validator = new JSONSchema()
{errors} = validator.validate(valid_doc, schema)
console.log errors
