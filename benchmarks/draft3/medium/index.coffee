validators = require "../validators"
{benchmark} = require("../../runner")(validators)

benchmark {
  name: "Configuration"
  repeats: 128
  schema: require "./schema"
  document: require "./valid_doc"
}



