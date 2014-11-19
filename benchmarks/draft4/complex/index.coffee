{benchmark} = require "../../validators"
benchmark {
  draft: 4
  name: "Transaction"
  repeats: 128
  schema: require "./schema"
  valid_doc: require "./valid_doc"
}

