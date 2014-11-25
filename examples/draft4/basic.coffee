JSCK = require("../../src/index")

# Construct a validator for a schema lacking an "id" declaration

validator = new JSCK.draft4
  type: "object"
  properties:
    user:
      type: "object"
      required: ["login"]
      properties:
        login:
          type: "string"
          pattern: "^[\\w\\d_]{3,32}$"
        email:
          type: "string"
          format: "email"

console.log "valid document:", validator.validate
  user:
    login: "matthew"
    email: "matthew@pandastrike.com"

{errors} = validator.validate
  user:
    login: "matthew"
    email: "pandastrike.com"

console.log "invalid document:", errors




