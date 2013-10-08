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

  run: ({iterations, warmup}) ->
    console.log "Benchmarking '#{@name}'"
    results = []
    arg = @_setup()

    if warmup
      console.log "  Warming up"
      for i in [1..warmup]
        @_measure(arg)

    process.stdout.write "Iterations: "
    for i in [1..iterations]
      t0 = microtime.now()
      @_measure(arg)
      t1 = microtime.now()
      results.push (t1 - t0) / 1000
      process.stdout.write "."
    console.log("\n\n")
    results


