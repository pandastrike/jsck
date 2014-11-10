creator = require("./validator")
uri = "http://json-schema.org/draft-04/schema#"

modules = [
  "type"
  "logical"
  "numeric"
  "objects"
  "strings"
]

mixins = for name in modules
  require "./draft4/#{name}"

Validator = creator(uri, mixins)
Validator.attributes = require "./draft4/attributes"

module.exports = Validator


