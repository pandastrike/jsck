#{benchmark} = require "../../validators"
#benchmark {
  #draft: 4
  #name: "Transaction"
  #repeats: 128
  #schema: require "./schema"
  #valid_doc: require "./valid_doc"
#}

JSCK = require "../../../src/draft4"
schema = require "./schema"
valid_doc = require "./valid_doc"

jsck = new JSCK(schema)

#validator = jsck.validator uri: "urn:jsck.benchmark.tx_list#"
report = jsck.validate(valid_doc)
console.log JSON.stringify(report, null, 2)
