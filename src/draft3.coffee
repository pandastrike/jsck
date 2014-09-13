creator = require("./validator")
uri = "http://json-schema.org/draft-03/schema#"

modules = [
  "logical"
  "numeric"
  "objects"
  "strings"
]

mixins = for name in modules
  require "./draft3/#{name}"

Validator = creator(uri, mixins)
Validator.attributes = require "./draft3/attributes"

module.exports = Validator



