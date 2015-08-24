# Benchmarks

JSCK has fairly comprehensive benchmarks which show it to be one of the fastest
JSON Schema validators available for Node.js.

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
  median: 175.372    max: 195.644    min: 51.016 

  amanda: validations/millisecond
  median: 3.87    max: 4.297    min: 3.41 

  JSV: validations/millisecond
  median: 2.726    max: 3.581    min: 1.904 

  json-gate: validations/millisecond
  median: 95.176    max: 102.585    min: 81.296 

Relative speeds:
JSCK : 1.000
json-gate : 1.843
amanda : 45.314
JSV : 64.345


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
  median: 101.911    max: 110.631    min: 29.144 

  amanda: validations/millisecond
  median: 3.448    max: 5.087    min: 2.365 

  JSV: validations/millisecond
  median: 1.667    max: 1.788    min: 1.419 

  json-gate: validations/millisecond
  median: 46.921    max: 50.854    min: 36.353 

Relative speeds:
JSCK : 1.000
json-gate : 2.172
amanda : 29.558
JSV : 61.125

## Benchmarks for Draft 4

Schema: 'Event - Valid document'.  A simple schema, exercising very few attributes
Sample size: 64
Validations per sample: 1024

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  ajv
  Warming up: ................................
  Iterations: ................................................................

  tv4
  Warming up: ................................
  Iterations: ................................................................

  Themis (minimal)
  Warming up: ................................
  Iterations: ................................................................

  Themis
  Warming up: ................................
  Iterations: ................................................................

  jayschema
  Warming up: ................................
  Iterations: ................................................................

  is-my-json-valid
  Warming up: ................................
  Iterations: ................................................................

  z-schema
  Warming up: ................................
  Iterations: ................................................................

  jsen
  Warming up: ................................
  Iterations: ................................................................


  JSCK: validations/millisecond
  median: 171.009    max: 185.105    min: 52.131 

  ajv: validations/millisecond
  median: 5851.429    max: 6564.103    min: 208.98 

  tv4: validations/millisecond
  median: 107.637    max: 121.471    min: 70.514 

  Themis (minimal): validations/millisecond
  median: 1114.861    max: 1214.709    min: 175.975 

  Themis: validations/millisecond
  median: 1112.439    max: 1190.698    min: 202.172 

  jayschema: validations/millisecond
  median: 2.334    max: 2.396    min: 2.236 

  is-my-json-valid: validations/millisecond
  median: 1334.202    max: 1523.81    min: 284.05 

  z-schema: validations/millisecond
  median: 121.262    max: 132.3    min: 77.983 

  jsen: validations/millisecond
  median: 2050.05    max: 2183.369    min: 236.435 

Relative speeds:
ajv : 1.000
jsen : 2.854
is-my-json-valid : 4.386
Themis (minimal) : 5.249
Themis : 5.260
JSCK : 34.217
z-schema : 48.254
tv4 : 54.363
jayschema : 2507.369


Schema: 'Configuration'.  A moderately complex schema with some nesting and value constraints
Sample size: 64
Validations per sample: 256

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  ajv
  Warming up: ................................
  Iterations: ................................................................

  tv4
  Warming up: ................................
  Iterations: ................................................................

  Themis (minimal)
  Warming up: ................................
  Iterations: ................................................................

  Themis
  Warming up: ................................
  Iterations: ................................................................

  jayschema
  Warming up: ................................
  Iterations: ................................................................

  is-my-json-valid
  Warming up: ................................
  Iterations: ................................................................

  z-schema
  Warming up: ................................
  Iterations: ................................................................

  jsen
  Warming up: ................................
  Iterations: ................................................................


  JSCK: validations/millisecond
  median: 114.567    max: 120.357    min: 34.651 

  ajv: validations/millisecond
  median: 2522.167    max: 2813.187    min: 47.434 

  tv4: validations/millisecond
  median: 58.05    max: 60.491    min: 30.061 

  Themis (minimal): validations/millisecond
  median: 227.353    max: 239.476    min: 44.96 

  Themis: validations/millisecond
  median: 217.502    max: 241.055    min: 41.673 

  jayschema: validations/millisecond
  median: 1.087    max: 1.125    min: 0.918 

  is-my-json-valid: validations/millisecond
  median: 898.246    max: 1015.873    min: 764.179 

  z-schema: validations/millisecond
  median: 54.818    max: 57.749    min: 31.469 

  jsen: validations/millisecond
  median: 842.105    max: 907.801    min: 379.259 

Relative speeds:
ajv : 1.000
is-my-json-valid : 2.808
jsen : 2.995
Themis (minimal) : 11.094
Themis : 11.596
JSCK : 22.015
tv4 : 43.448
z-schema : 46.010
jayschema : 2319.384


Schema: 'Transaction'.  
Sample size: 64
Validations per sample: 64

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  ajv
  Warming up: ................................
  Iterations: ................................................................

  tv4
  Warming up: ................................
  Iterations: ................................................................

  Themis (minimal)
  Warming up: ................................
  Iterations: ................................................................

  Themis
  Warming up: ................................
  Iterations: ................................................................

  jayschema
  Warming up: ................................
  Iterations: ................................................................

  is-my-json-valid
  Warming up: ................................
  Iterations: ................................................................

  z-schema
  Warming up: ................................
  Iterations: ................................................................

  jsen
  Warming up: ................................
  Iterations: ................................................................


  JSCK: validations/millisecond
  median: 15.754    max: 16.71    min: 7.334 

  ajv: validations/millisecond
  median: 74.854    max: 83.442    min: 13.262 

  tv4: validations/millisecond
  median: 2.775    max: 3.233    min: 2.192 

  Themis (minimal): validations/millisecond
  median: 45.007    max: 48.855    min: 9.359 

  Themis: validations/millisecond
  median: 42.175    max: 47.513    min: 10.764 

  jayschema: validations/millisecond
  median: 0.062    max: 0.062    min: 0.06 

  is-my-json-valid: validations/millisecond
  median: 60.952    max: 66.806    min: 9.678 

  z-schema: validations/millisecond
  median: 4.349    max: 5.016    min: 3.048 

  jsen: validations/millisecond
  median: 57.219    max: 62.016    min: 11.582 

Relative speeds:
ajv : 1.000
is-my-json-valid : 1.228
jsen : 1.308
Themis (minimal) : 1.663
Themis : 1.775
JSCK : 4.751
z-schema : 17.212
tv4 : 26.974
jayschema : 1215.089

```

