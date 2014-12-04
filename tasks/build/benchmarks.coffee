fs = require "fs"
shell = require "shelljs"

result = shell.exec "coffee benchmarks"
fs.writeFileSync "benchmarks/results/all.txt", result.output

