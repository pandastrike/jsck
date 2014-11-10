{benchmark} = require "../validators"
benchmark {
  name: "Configuration"
  repeats: 128
  schema: require "./schema"
  valid_doc: require "./valid_doc"
}







