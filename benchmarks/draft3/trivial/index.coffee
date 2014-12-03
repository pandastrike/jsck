validators = require "../validators"
{benchmark} = require("../../runner")(validators)

benchmark {
  name: "Event"
  repeats: 512
  schema: require "./schema"
  document: require "./valid_doc"
}

