validators = require "../validators"
{benchmark} = require("../../runner")(validators)

benchmark {
  name: "Transaction"
  repeats: 64
  schema: require "./schema"
  document: require "./valid_doc"
}


