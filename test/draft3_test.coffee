{draft3} = require("../src/index")
SuiteRunner = require "./suite_runner"

[_node, _script, attribute, test_number] = process.argv

runner = new SuiteRunner "draft3",
  ignore:
    ref: [
      "remote ref, containing refs itself"
    ]
    minLength: [
      "one supplementary Unicode code point is not long enough"
    ]
    maxLength: [
      "two supplementary Unicode code points is long enough"
    ]
    refRemote: true
    uniqueItems: true
    "optional/zeroTerminatedFloats": true

runner.test
  constructor: draft3
  attribute: attribute
  test_number: test_number
