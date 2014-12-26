# stdlib
util = require "util"

# our simple benchmarking library
Benchmark = require "./benchmark.coffee"
samples = 64

module.exports = (validators) ->

  benchmark: ({name, schema, document, repeats}) ->

    libraries = []

    for library, {setup, validate, error} of validators

      ## preflight to check for incorrect validation errors
      ## Currently disabled because of issues with z-schema.
      #validator = setup(schema)
      #e = error(validate({validator, schema, document}))
      #if e
        #console.log "Aborting because #{library} declared the document invalid:"
        #console.log e
        #process.exit(1)

      do (setup, validate) ->
        libraries.push new Benchmark library, (bm) ->
          bm.setup ->
            setup(schema)
          bm.measure (validator) ->
            for i in [1..repeats]
              validate({validator, schema, document})


    console.log """

      Schema: '#{name}'.  #{schema.description || ''}
      Sample size: #{samples}
      Validations per sample: #{repeats}

    """


    
    results = Benchmark.compare libraries, {samples, warmup: 32}

    console.log()
    x = for name, result of results
      {median, max, min} = result.summarize()

      console.log "  #{name}: validations/millisecond"
      console.log util.format "  median: %d    max: %d    min: %d ",
        (repeats * 1 / median).toFixed(3),
        (repeats * 1 / min).toFixed(3),
        (repeats * 1 / max).toFixed(3)

      console.log()
      [name, median]

    sorted = x.sort (a, b) ->
      a[1] > b[1]

    fastest = sorted[0]
    ftime = fastest[1]

    console.log "Relative speeds:"
    for [name, time] in x
      console.log name, ":", (time / ftime).toFixed(3)
    console.log()

