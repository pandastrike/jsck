Validator = require("../src/index").draft3

# a schema without an "id" declaration

validator = new Validator
  type: "object"
  properties:
    user:
      type: "object"
      properties:
        login:
          required: true
          type: "string"
          pattern: "^[\\w\\d_]{3,32}$"
        email:
          type: "string"

{valid} = validator.validate
  user:
    login: "automatthew"
    email: "automatthew@mailinator.com"

console.log "Anonymous schema:", valid


