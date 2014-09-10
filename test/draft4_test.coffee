{draft4} = require("../src/index")
SuiteRunner = require "./suite_runner"

[_node, _script, attribute, test_number] = process.argv

runner = new SuiteRunner "draft4",
  ignore:
    ref: [
      "remote ref, containing refs itself"
    ]
    definitions: true
    refRemote: true
    uniqueItems: true
    "optional/zeroTerminatedFloats": true

runner.test
  constructor: draft4
  attribute: attribute
  test_number: test_number
