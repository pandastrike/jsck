microtime = require "microtime"
require "./statistics"

module.exports = class Benchmark

  @compare: (benchmarks, options) ->
    out = {}
    for benchmark in benchmarks
      out[benchmark.name] = benchmark.run(options)
    out

  constructor: (@name, callback) ->
    callback(@)

  setup: (@_setup) ->

  measure: (@_measure) ->

  run: ({samples, warmup}) ->
    console.error "  #{@name}"
    results = []
    subject = @_setup()

    if warmup
      process.stderr.write "  Warming up: "
      for i in [1..warmup]
        @_measure(subject)
        process.stderr.write "."
      process.stderr.write("\n")

    process.stderr.write "  Iterations: "
    for i in [1..samples]
      t0 = microtime.now()
      @_measure(subject)
      t1 = microtime.now()
      results.push (t1 - t0) / 1000
      process.stderr.write "."
    console.error("\n")
    results


