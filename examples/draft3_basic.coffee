Validator = require("../src/index").draft3

# a schema without an "id" declaration

validator = new Validator
  type: "object"
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

document =
  user:
    login: "automatthew"
    email: "automatthew@mailinator.com"

{valid} = validator.validate(document)
console.log "Anonymous schema:", valid


# a schema declaring a URI with "id"

validator = new Validator
  id: "urn:jsck.examples.basic#"
  type: "object"
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

{valid} = validator.validate_schema "urn:jsck.examples.basic#", document
console.log "Schema with id:", valid


# validating against a subschema using a JSON Pointer

document =
  login: "automatthew"
  email: "automatthew@mailinator.com"

{valid} = validator.validate_schema "urn:jsck.examples.basic#/definitions/user", document
console.log "Schema identified by JSON Pointer:", valid

