{benchmark} = require "../../validators"
benchmark {
  draft: 3
  name: "Event"
  repeats: 256
  schema: require "./schema"
  valid_doc: require "./valid_doc"
}

