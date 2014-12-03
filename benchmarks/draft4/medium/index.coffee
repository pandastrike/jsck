validators = require "../validators"
{benchmark} = require("../../runner")(validators)

benchmark {
  name: "Configuration"
  repeats: 256
  schema: require "./schema"
  document: require "./valid_doc"
}

