JSCK = require("../src/index")

# using a schema that declares a URI with "id"

jsck = new JSCK.draft4
  $schema: "http://json-schema.org/draft-03/schema#"
  id: "urn:jsck.examples.advanced#"
  definitions:
    user:
      type: "object"
      required: ["login"]
      properties:
        login:
          type: "string"
          pattern: "^[\\w\\d_]{3,32}$"
        email:
          type: "string"

validator = jsck.validator(uri: "urn:jsck.examples.advanced#")
{valid} = validator.validate
  login: "automatthew"
  email: "automatthew@mailinator.com"

console.log "Schema with id:", valid


# validating against a subschema using a JSON Pointer

validator = jsck.validator "urn:jsck.examples.advanced#/definitions/user"
{valid} = validator.validate
  login: "automatthew"
  email: "automatthew@mailinator.com"

console.log "Schema identified by JSON Pointer:", valid


# Adding multiple schemas
#
# You can instantiate JSCK with multiple schemas or add them later
# 
# Instantiation:
# validator = new JSCK(schema1, schema2, schema3)

jsck.add
  id: "urn:jsck.examples.user_list#"
  type: "array"
  items: {$ref: "urn:jsck.examples.advanced#/definitions/user"}

validator = jsck.validator "urn:jsck.examples.user_list#"
{valid} = validator.validate [
  { login: "dyoder" }
  { login: "automatthew" }
]

console.log "Multiple schemas:", valid


