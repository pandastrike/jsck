{benchmark} = require "./validators"

names = [
  "config"
]

for name in names
  benchmark {
    name
    iterations: 16
    repeats: 256
  }






