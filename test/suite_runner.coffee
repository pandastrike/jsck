fs = require "fs"
glob = require "glob"

assert = require "assert"
Testify = require "testify"

module.exports = class SuiteRunner

  constructor: (@version, {@ignore}) ->
    @suites = {}
    @read()

  read: ->
    files = glob.sync "test/JSON-Schema-Test-Suite/tests/#{@version}/**/*.json"
    l = "test/JSON-Schema-Test-Suite/tests/#{@version}/".length
    for file in files
      # drop the .json
      key = file.slice(l, -5)

      continue if @ignore?[key] == true
      string = fs.readFileSync(file, "utf8")
      @suites[key] = JSON.parse string

  test: ({constructor, attribute, test_number}) ->

    Testify.test "JSON Schema: #{@version}", (context) =>
      if attribute
        attribute_suite = @suites[attribute]
        if !attribute_suite
          throw new Error "No such attribute to test: '#{attribute}'"
        else
          @run_attribute({constructor, context, attribute, attribute_suite, test_number})
        if @ignore?[attribute]
          process.on "exit", =>
            console.log "Ignored these tests:", @ignore[attribute]
      else
        for attribute, attribute_suite of @suites
          @run_attribute({constructor, context, attribute, attribute_suite, test_number})
        if @ignore
          process.on "exit", =>
            console.log "Ignored these tests:"
            for attribute, val of @ignore
              if val == true
                console.log attribute
              else
                console.log "#{attribute}:", val

  run_attribute: ({constructor, context, attribute, attribute_suite, test_number}) ->
    context.test attribute, (context) =>
      if test_number
        if suite = attribute_suite[parseInt(test_number) - 1]
          @run_subsuite({constructor, context, suite})
        else
          console.log "Usage error: #{attribute} only has #{attribute_suite.length + 1} tests"
          process.exit()
      else
        for suite, i in attribute_suite
          unless @ignore?[attribute]?.some((item) => item == suite.description)
            @run_subsuite({constructor, context, suite})

  run_subsuite: ({constructor, context, suite}) ->
    context.test suite.description, (context) =>
      validator = new constructor(suite.schema)

      for document in suite.tests
        context.test document.description, =>
          result = validator.validate(document.data)
          assert.equal result.valid, document.valid

