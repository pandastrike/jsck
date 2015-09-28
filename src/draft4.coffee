validator = require("./validator")

module.exports = validator
  schema_uri: "http://json-schema.org/draft-04/schema#"
  mixins: [
    require "./draft4/type"
    require "./draft4/logical"
    require "./draft4/numeric"
    require "./draft4/objects"
    require "./draft4/strings"
  ]
