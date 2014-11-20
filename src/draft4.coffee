validator = require("./validator")

modules = [
  "type"
  "logical"
  "numeric"
  "objects"
  "strings"
]

module.exports = validator
  uri: "http://json-schema.org/draft-04/schema#"
  mixins: (require "./draft4/#{name}" for name in modules)
