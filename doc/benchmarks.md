# Benchmarks

JSCK has fairly comprehensive benchmarks which show it to be the fastest JSON
Schema validator available for Node.js.

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
  median: 128.257    max: 172.333    min: 52.958

  amanda: validations/millisecond
  median: 2.234    max: 2.61    min: 1.627

  JSV: validations/millisecond
  median: 1.045    max: 1.717    min: 0.69

  json-gate: validations/millisecond
  median: 51.295    max: 80.605    min: 26.26

Relative speeds:
JSCK : 1.000
json-gate : 2.500
amanda : 57.414
JSV : 122.701


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
  median: 39.733    max: 74.203    min: 9.848

  amanda: validations/millisecond
  median: 2.172    max: 3.671    min: 1.382

  JSV: validations/millisecond
  median: 0.73    max: 0.827    min: 0.545

  json-gate: validations/millisecond
  median: 29.19    max: 35.271    min: 14.398

Relative speeds:
JSCK : 1.000
json-gate : 1.361
amanda : 18.295
JSV : 54.441

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

  jayschema
  Warming up: ................................
  Iterations: ................................................................

  is-my-json-valid
  Warming up: ................................
  Iterations: ................................................................

  z-schema
  Warming up: ................................
  Iterations: ................................................................


  JSCK: validations/millisecond
  median: 114.184    max: 151.032    min: 82.781

  tv4: validations/millisecond
  median: 53.989    max: 78.275    min: 29.879

  jayschema: validations/millisecond
  median: 0.778    max: 1.048    min: 0.707

  is-my-json-valid: validations/millisecond
  median: 1209.687    max: 1815.603    min: 619.855

  z-schema: validations/millisecond
  median: 54.157    max: 65.061    min: 36.962

Relative speeds:
is-my-json-valid : 1.000
JSCK : 10.594
z-schema : 22.337
tv4 : 22.406
jayschema : 1553.872


Schema: 'Configuration'.  A moderately complex schema with some nesting and value constraints
Sample size: 64
Validations per sample: 256

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  tv4
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


  JSCK: validations/millisecond
  median: 69.461    max: 91.266    min: 38.935

  tv4: validations/millisecond
  median: 20.429    max: 27.7    min: 13.073

  jayschema: validations/millisecond
  median: 0.386    max: 0.509    min: 0.335

  is-my-json-valid: validations/millisecond
  median: 488.084    max: 847.682    min: 128.902

  z-schema: validations/millisecond
  median: 22.665    max: 29.64    min: 10.564

Relative speeds:
is-my-json-valid : 1.000
JSCK : 7.027
z-schema : 21.535
tv4 : 23.891
jayschema : 1263.114


Schema: 'Transaction'.
Sample size: 64
Validations per sample: 64

  JSCK
  Warming up: ................................
  Iterations: ................................................................

  tv4
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


  JSCK: validations/millisecond
  median: 7.202    max: 9.674    min: 4.452

  tv4: validations/millisecond
  median: 1.407    max: 1.678    min: 1.166

  jayschema: validations/millisecond
  median: 0.021    max: 0.031    min: 0.017

  is-my-json-valid: validations/millisecond
  median: 64.581    max: 78.335    min: 24.568

  z-schema: validations/millisecond
  median: 2.525    max: 3.305    min: 1.365

Relative speeds:
is-my-json-valid : 1.000
JSCK : 8.967
z-schema : 25.578
tv4 : 45.908
jayschema : 3074.659
```