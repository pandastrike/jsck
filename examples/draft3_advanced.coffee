Validator = require("../src/index").draft3

# a schema declaring a URI with "id"

validator = new Validator
  id: "urn:jsck.examples.advanced#"
  definitions:
    user:
      type: "object"
      properties:
        login:
          required: true
          type: "string"
          pattern: "^[\\w\\d_]{3,32}$"
        email:
          type: "string"

{valid} = validator.validate_schema "urn:jsck.examples.advanced#",
  login: "automatthew"
  email: "automatthew@mailinator.com"

console.log "Schema with id:", valid


# validating against a subschema using a JSON Pointer

document =
  login: "automatthew"
  email: "automatthew@mailinator.com"

{valid} = validator.validate_schema "urn:jsck.examples.advanced#/definitions/user",
  login: "automatthew"
  email: "automatthew@mailinator.com"

console.log "Schema identified by JSON Pointer:", valid


# Adding multiple schemas
#
# You can instantiate JSCK with multiple schemas or add them later
# 
# Instantiation:
# validator = new Validator(schema1, schema2, schema3)

validator.add
  id: "urn:jsck.examples.user_list#"
  type: "array"
  items: {$ref: "urn:jsck.examples.advanced#/definitions/user"}

{valid} = validator.validate_schema "urn:jsck.examples.user_list#", [
  { login: "dyoder" }
  { login: "automatthew" }
]

console.log "Multiple schemas:", valid

