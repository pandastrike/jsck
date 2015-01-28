# Benchmarks

JSCK has fairly comprehensive benchmarks which show it to be the fastest JSON
Schema validator available for Node.js.

To run the benchmarks immediately after you `git clone` the repo:

```shell
git clone git@github.com:pandastrike/jsck.git && \
git submodule update --init && \
npm install && \
coffee benchmarks/
```

Benchmarking harness and content lives in `benchmarks`, with separate
directories for each draft.  For each draft there are a number of different
benchmarks (contained in subdirectories) that can be run in whole or in part.
This is the basic directory structure:

    benchmarks/
      draft3/
      draft4/
        complex/
        medium/
        trivial/
        index.coffee
        validators.coffee

## Adding Additional Validators

The validators are defined in `validators.coffee`.  Here's an example from
the Draft 4 benchmarks:

```coffee
  "tv4":
    setup: (schema) ->
      require("tv4").tv4
    validate: ({validator, schema, document}) ->
      validator.validateResult(document, schema)
    error: (result) ->
      if result.valid == true
        false
      else
        result.error

```


The `setup` function returns a validator object usable by the `validate`
function.  The `validate` function performs the actual validation work that
is measured in benchmarking.  The `error` function is used only in the
preflight stage of benchmarking to determine whether the result of the
`validate` function contains any errors. This is useful in making sure that all
the validators are actually operating correctly and thus being compared fairly.



## Adding New Benchmarks

Each individual benchmark consists of a directory containing a schema, a valid
document, and an `index.coffee` file which runs the benchmark.

```coffee
validators = require "../validators"
{benchmark} = require("../../runner")(validators)

benchmark {
  name: "Event - Valid document"
  repeats: 1024
  schema: require "./schema"
  document: require "./valid_doc"
}

```


The "repeats" parameter determines how many times the document will be
validated during a single measurement sample.





## Running Benchmarks

You can run very specific benchmarks, like the medium-complexity benchmarks for draft 3 only, like so:

`coffee benchmarks/draft3/medium`

You can run all benchmarks for a specific JSON Schema draft:

`coffee benchmarks/draft4`

Or, to run all benchmarks:

`coffee benchmarks/`

You should then see something like this:

```txt
## Benchmarks for Draft 3

Schema: 'Event'.  A simple schema, exercising very few attributes
Sample size: 64
Validations per sample: 512

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  amanda
  Warming up: ................................
  Iterations: ................................................................

  JSV
  Warming up: ................................
  Iterations: ................................................................

  json-gate
  Warming up: ................................
  Iterations: ................................................................


  JSCK: validations/millisecond
  median: 193.025    max: 202.692    min: 175.945 

  amanda: validations/millisecond
  median: 4.258    max: 4.608    min: 3.778 

  JSV: validations/millisecond
  median: 2.685    max: 2.748    min: 2.43 

  json-gate: validations/millisecond
  median: 82.514    max: 86.036    min: 48.234 

Relative speeds:
JSCK : 1.000
json-gate : 2.339
amanda : 45.337
JSV : 71.896


Schema: 'Configuration'.  A moderately complex schema with some nesting and value constraints
Sample size: 64
Validations per sample: 128

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  amanda
  Warming up: ................................
  Iterations: ................................................................

  JSV
  Warming up: ................................
  Iterations: ................................................................

  json-gate
  Warming up: ................................
  Iterations: ................................................................


  JSCK: validations/millisecond
  median: 108.936    max: 109.966    min: 85.964 

  amanda: validations/millisecond
  median: 3.788    max: 5.651    min: 2.371 

  JSV: validations/millisecond
  median: 1.344    max: 1.359    min: 1.255 

  json-gate: validations/millisecond
  median: 44.176    max: 45.845    min: 41.803 

Relative speeds:
JSCK : 1.000
json-gate : 2.466
amanda : 28.760
JSV : 81.025

## Benchmarks for Draft 4

Schema: 'Event - Valid document'.  A simple schema, exercising very few attributes
Sample size: 64
Validations per sample: 1024

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  tv4
  Warming up: ................................
  Iterations: ................................................................

  z-schema
  Warming up: ................................
  Iterations: ................................................................


  JSCK: validations/millisecond
  median: 186.81    max: 191.617    min: 138.716 

  tv4: validations/millisecond
  median: 54.377    max: 55.907    min: 46.942 

  z-schema: validations/millisecond
  median: 93.657    max: 93.979    min: 89.44 

Relative speeds:
JSCK : 1.000
z-schema : 1.995
tv4 : 3.435


Schema: 'Configuration'.  A moderately complex schema with some nesting and value constraints
Sample size: 64
Validations per sample: 256

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  tv4
  Warming up: ................................
  Iterations: ................................................................

  z-schema
  Warming up: ................................
  Iterations: ................................................................


  JSCK: validations/millisecond
  median: 118.573    max: 119.07    min: 105.22 

  tv4: validations/millisecond
  median: 19.608    max: 20.389    min: 16.505 

  z-schema: validations/millisecond
  median: 40.606    max: 40.934    min: 34.934 

Relative speeds:
JSCK : 1.000
z-schema : 2.920
tv4 : 6.047


Schema: 'Transaction'.  
Sample size: 64
Validations per sample: 64

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  tv4
  Warming up: ................................
  Iterations: ................................................................

  z-schema
  Warming up: ................................
  Iterations: ................................................................


  JSCK: validations/millisecond
  median: 12.814    max: 14.873    min: 6.984 

  tv4: validations/millisecond
  median: 1.946    max: 1.965    min: 1.832 

  z-schema: validations/millisecond
  median: 3.768    max: 3.836    min: 3.297 

Relative speeds:
JSCK : 1.000
z-schema : 3.401
tv4 : 6.583

```

