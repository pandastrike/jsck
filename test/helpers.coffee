fs = require "fs"

assert = require "assert"
Testify = require "testify"

[_n, _f, property_name, count] = process.argv

exports.test = (constructor, version) ->

  properties = read_suite "draft3"


  Testify.test "JSON Schema: #{version}", (t) ->
    if property_name
      property_name = property_name.split(".")[0]
      property = properties[property_name]
      if !property
        throw new Error "No such property to test: '#{property_name}'"
      else
        run_suite constructor, t, property_name, property
    else
      for name, property of properties
        run_suite constructor, t, name, property


ignores = [ "optional" ]

read_suite = (version) ->
  properties = {}
  files = fs.readdirSync("test/JSON-Schema-Test-Suite/tests/#{version}")
  for path in files when !(ignores.some (i) -> i == path)
    key = path.split(".")[0]
    string = fs.readFileSync("test/JSON-Schema-Test-Suite/tests/#{version}/#{path}", "utf8")
    properties[key] = JSON.parse string
  properties

run_suite = (constructor, context, name, property) ->
  context.test name, (context) ->

    for suite, i in property
      if count && parseInt(count) == i
        return

      context.test suite.description, (context) ->
        validator = new constructor(suite.schema)

        for document in suite.tests
          context.test document.description, ->
            result = validator.validate(document.data)
            assert.equal result.valid, document.valid







