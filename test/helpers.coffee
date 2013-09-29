fs = require "fs"
glob = require "glob"

assert = require "assert"
Testify = require "testify"

[_n, _f, property_name, test_number] = process.argv

exports.test = (constructor, version) ->

  properties = read_suite "draft3"


  Testify.test "JSON Schema: #{version}", (t) ->
    if property_name
      property_name = property_name.split(".")[0]
      property = properties[property_name]
      if !property
        throw new Error "No such property to test: '#{property_name}'"
      else
        run_attribute constructor, t, property_name, property
    else
      for name, property of properties
        run_attribute constructor, t, name, property


ignores = [ "optional", "uniqueItems", "refRemote", "optional/zeroTerminatedFloats" ]

read_suite = (version) ->
  properties = {}

  files = glob.sync "test/JSON-Schema-Test-Suite/tests/#{version}/**/*.json"
  l = "test/JSON-Schema-Test-Suite/tests/#{version}/".length
  for file in files
    key = file.slice(l, -5)
    continue if ignores.some (element) -> element == key
    string = fs.readFileSync(file, "utf8")
    properties[key] = JSON.parse string
  properties

run_attribute = (constructor, context, name, attribute) ->
  context.test name, (context) ->

    if test_number
      suite = attribute[parseInt(test_number) - 1]
      run_suite(constructor, context, suite)
    else

      for suite, i in attribute
        run_suite(constructor, context, suite)


run_suite = (constructor, context, suite) ->
  context.test suite.description, (context) ->
    validator = new constructor(suite.schema)

    for document in suite.tests
      context.test document.description, ->
        result = validator.validate(document.data)
        assert.equal result.valid, document.valid




