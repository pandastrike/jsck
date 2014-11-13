{benchmark} = require "../../validators"
benchmark {
  draft: 4
  name: "Event"
  repeats: 256
  schema: require "./schema"
  valid_doc: require "./valid_doc"
}

