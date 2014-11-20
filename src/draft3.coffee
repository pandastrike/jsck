validator = require("./validator")

modules = [
  "logical"
  "numeric"
  "objects"
  "strings"
]

module.exports = validator
  uri: "http://json-schema.org/draft-03/schema#"
  mixins: (require "./draft3/#{name}" for name in modules)
