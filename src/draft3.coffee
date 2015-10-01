validator = require("./validator")

module.exports = validator
  schema_uri: "http://json-schema.org/draft-03/schema#"
  mixins: [
    require "./draft3/logical"
    require "./draft3/numeric"
    require "./draft3/objects"
    require "./draft3/strings"
  ]
