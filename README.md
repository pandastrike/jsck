# JSON Schema Compiled checK

JSCK is the fastest [JSON Schema](http://json-schema.org) validator for Node.js.
It supports JSON Schema drafts
[3][draft3_doc] and
[4][draft4_doc],
with a few caveats (see [below](#coverage)).


## Installation and Usage

Install with NPM:

    npm install --save jsck


Require:

```coffee
JSCK = require "jsck"
```

JSCK can create validators from multiple schemas, but this requires that
each schema be identified with a URI in a top-level "id" field.  In many
cases, only a single schema is needed, and there is no need to uniquely
identify the schema.  This is the easiest way to use JSCK, as it is a
common pattern.


```coffee
# Construct a validator for a schema lacking an "id" declaration

validator = new JSCK.draft4
  type: "object"
  properties:
    user:
      type: "object"
      required: ["login"]
      properties:
        login:
          type: "string"
          pattern: "^[\\w\\d_]{3,32}$"
        email:
          type: "string"
          format: "email"

console.log "valid document:", validator.validate
  user:
    login: "matthew"
    email: "matthew@pandastrike.com"

{errors} = validator.validate
  user:
    login: "matthew"
    email: "pandastrike.com"

console.log "invalid document:", errors

```



To use Draft 3 schemas:

```.coffee
validator = new JSCK.draft3(schema)
```


See these [advanced usage examples](examples/draft3_advanced.coffee) for help
working with multiple schemas.


### Validation errors

The JSCK validation report includes information about the errors, but they are
currently somewhat cryptic. PRs welcome.


## Why JSCK?

JSCK is [faster](#benchmarks) than other JavaScript libraries for validating
JSON Schemas because it "compiles" them. That is, JSCK generates the tree of
functions needed to validate a particular schema when you construct a
validator.  The schema is thus traversed only during preparation, and most of
the work of interpreting the schema is done at this time, rather than for every
document submitted for validation.  This minimizes the work required during
validation, which leads to substantial performance improvements over
non-compiling validators.


## Coverage

### Draft 4

JSCK passes all tests in the canonical
[JSON Schema Test Suite][canonical], except for these items:

* use of `maxLength` and `minLength` with Unicode surrogate pairs.
* `refRemote` (this is an essential feature we do plan to support)
* `ref`
  * remote ref, containing refs itself
* `uniqueItems`
* `optional/zeroTerminatedFloats`


### Draft 3

Currently passing the canonical [test suite][canonical] for draft3 except for
these items:

* `refRemote`
* `ref`
  * remote ref, containing refs itself
* `uniqueItems`
* `optional/zeroTerminatedFloats`

### Managing resolution scope with the "id" attribute

JSCK does not support the full range of scope manipulations suggested by drafts
3 and 4.  Scope manipulation is a controversial topic, and with JSCK we have
chosen to play it safe, supporting "id" declarations only in cases that will
(probably) not lead to any ambiguity. Specifically, JSCK uses "id" declarations
only in these cases:

* at the top level of a schema, to provide a namespace for schemas not loaded from URIs.
* non-JSON-pointer fragments (`"id": "#user"`), which serve merely as aliases for specific subschemas, and are thus convenient and unambiguous.

For more information on the topic of the "id" attribute and scope manipulation,
see this issue: https://github.com/json-schema/json-schema/issues/77.


## Contributing

To contribute, hack on it, or run the tests:

```shell
git clone git@github.com:pandastrike/jsck.git
cd jsck
coffee tasks/update
npm install
```

### Tests

To run all tests for all versions:

    coffee test

Official test suite only a specific version:

    coffee test/draft4

To run only the tests for the "type" attribute, use:

    coffee test/draft4 type

And to run only the third test for that attribute, use:

    coffee test/draft4 type 3

You'll find the official test suites in `test/JSON-Schema-Test-Suite`. (Don't forget to initialize the git submodules! That test suite is in a git submodule.)


## Benchmarks

JSCK has fairly comprehensive benchmarks which show it to be the fastest JSON
Schema validator available for Node.js. Pull requests welcome, of course.

### Adding New Benchmarks

Benchmark setup happens in `benchmarks/validators.coffee`. The lines of code to set up a typical benchmarker look like this:

```coffeescript
  benchmarker("jayschema: valid document", new JaySchema(), (validator) ->
    validator.validate(valid_doc, schema))
```

You pass the function a description, a validator, and a callback function, which
has the validator validate a valid document. The `benchmarker` function takes
care of the rest. Caveat: there's a `switch/when` statement for validators that
can only handle one draft or another of JSON Schema.


### Running Benchmarks

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


## Plans

### 0.3
* improved validation error reports (reports are currently somewhat cryptic)
* support remote references
* use $schema values to determine which JSON Schema draft to use


[draft3_doc]:http://tools.ietf.org/html/draft-zyp-json-schema-03
[draft3_impl]:https://github.com/json-schema/json-schema/tree/master/draft-03
[draft4_doc]:http://tools.ietf.org/html/draft-zyp-json-schema-04
[canonical]:https://github.com/json-schema/JSON-Schema-Test-Suite
