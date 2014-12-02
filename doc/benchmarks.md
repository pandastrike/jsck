
# Benchmarks

JSCK has fairly comprehensive benchmarks which show it to be the fastest JSON
Schema validator available for Node.js.

## Adding New Benchmarks

Benchmark setup happens in `benchmarks/validators.coffee`. The lines of code to set up a typical benchmarker look like this:

```coffeescript
  benchmarker("jayschema: valid document", new JaySchema(), (validator) ->
    validator.validate(valid_doc, schema))
```

You pass the function a description, a validator, and a callback function, which
has the validator validate a valid document. The `benchmarker` function takes
care of the rest. Caveat: there's a `switch/when` statement for validators that
can only handle one draft or another of JSON Schema.


## Running Benchmarks

You can run very specific benchmarks, like the medium-complexity benchmarks for draft 3 only, like so:

`coffee benchmarks/draft3/medium`

You can run all benchmarks for a specific JSON Schema draft:

`coffee benchmarks/draft4`

Or, to run all benchmarks:

`coffee benchmarks/`

You should then see something like this:

```
Benchmarks for schema 'Event'.  A simple schema, exercising very few attributes
Sample size: 64
Validations per sample: 256

  JSCK: valid document
  Iterations: ................................................................

  jsonschema: valid document
  Iterations: ................................................................

  tv4: valid document
  Iterations: ................................................................

  Amanda: valid document
  Iterations: ................................................................

  JSV: valid document
  Iterations: ................................................................

  json-gate: valid document
  Iterations: ................................................................


  JSCK: valid document
  median: 1.27 ms  max: 6.228 ms  min: 1.149 ms

  jsonschema: valid document
  median: 98.314 ms  max: 127.162 ms  min: 94.333 ms

  tv4: valid document
  median: 4.399 ms  max: 14.267 ms  min: 4.023 ms

  Amanda: valid document
  median: 71.158 ms  max: 91.979 ms  min: 57.45 ms

  JSV: valid document
  median: 34.236 ms  max: 65.83 ms  min: 31.651 ms

  json-gate: valid document
  median: 3.431 ms  max: 16.098 ms  min: 3.243 ms


Benchmarks for schema 'Configuration'.  A moderately complex schema with some nesting and value constraints
Sample size: 64
Validations per sample: 128

  JSCK: valid document
  Iterations: ................................................................

  jsonschema: valid document
  Iterations: ................................................................

  tv4: valid document
  Iterations: ................................................................

  Amanda: valid document
  Iterations: ................................................................

  JSV: valid document
  Iterations: ................................................................

  json-gate: valid document
  Iterations: ................................................................


  JSCK: valid document
  median: 1.097 ms  max: 1.704 ms  min: 1 ms

  jsonschema: valid document
  median: 97.238 ms  max: 137.232 ms  min: 91.158 ms

  tv4: valid document
  median: 4.982 ms  max: 27.288 ms  min: 4.602 ms

  Amanda: valid document
  median: 39.832 ms  max: 56.923 ms  min: 25.332 ms

  JSV: valid document
  median: 16.514 ms  max: 44.734 ms  min: 15.787 ms

  json-gate: valid document
  median: 3.291 ms  max: 9.765 ms  min: 3.078 ms


Benchmarks for schema 'Event'.  A simple schema, exercising very few attributes
Sample size: 64
Validations per sample: 256

  JSCK: valid document
  Iterations: ................................................................

  jsonschema: valid document
  Iterations: ................................................................

  tv4: valid document
  Iterations: ................................................................

  jayschema: valid document
  Iterations: ................................................................

  z-schema: valid document
  Iterations: ................................................................


  JSCK: valid document
  median: 1.306 ms  max: 2.791 ms  min: 1.197 ms

  jsonschema: valid document
  median: 100.305 ms  max: 137.678 ms  min: 95.807 ms

  tv4: valid document
  median: 6.087 ms  max: 9.463 ms  min: 5.713 ms

  jayschema: valid document
  median: 188.783 ms  max: 225.096 ms  min: 185.282 ms

  z-schema: valid document
  median: 2.965 ms  max: 9.707 ms  min: 2.581 ms


Benchmarks for schema 'Configuration'.  A moderately complex schema with some nesting and value constraints
Sample size: 64
Validations per sample: 128

  JSCK: valid document
  Iterations: ................................................................

  jsonschema: valid document
  Iterations: ................................................................

  tv4: valid document
  Iterations: ................................................................

  jayschema: valid document
  Iterations: ................................................................

  z-schema: valid document
  Iterations: ................................................................


  JSCK: valid document
  median: 1.004 ms  max: 2.363 ms  min: 0.905 ms

  jsonschema: valid document
  median: 94.664 ms  max: 124.83 ms  min: 89.514 ms

  tv4: valid document
  median: 7.252 ms  max: 16.651 ms  min: 6.907 ms

  jayschema: valid document
  median: 183.689 ms  max: 211.238 ms  min: 179.26 ms

  z-schema: valid document
  median: 3.473 ms  max: 8.467 ms  min: 3.223 ms
```