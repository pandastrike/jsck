{benchmark} = require "../validators"

benchmark {
  schema: require "./schema"
  doc: require "./valid_doc"
  iterations: 16
  repeats: 256
}



