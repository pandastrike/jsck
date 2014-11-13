{benchmark} = require "../../validators"
benchmark {
  draft: 3
  name: "Configuration"
  repeats: 128
  schema: require "./schema"
  valid_doc: require "./valid_doc"
}



