validators = require "../validators"
{benchmark} = require("../../runner")(validators)

benchmark {
  name: "Event - Valid document"
  repeats: 1024
  schema: require "./schema"
  document: require "./valid_doc"
}

