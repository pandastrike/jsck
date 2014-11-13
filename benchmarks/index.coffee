{benchmark} = require "./validators"

for name in [
  "event"
  "config"
]
  require "./#{name}"

