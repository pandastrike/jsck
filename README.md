# JSON Schema Compiled checK

JSCK is the fastest [JSON Schema](http://json-schema.org) validator for Node.js.
It supports JSON Schema drafts
[3][draft3_doc] and
[4][draft4_doc],
with a few caveats (see the [Coverage section](#coverage) below).


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

jsck = new JSCK.draft4
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

console.log "valid document:", jsck.validate
  user:
    login: "matthew"
    email: "matthew@pandastrike.com"

{errors} = jsck.validate
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



## Why JSCK?

JSCK is [faster](#benchmarks) than other JavaScript libraries for validating
JSON Schemas because it "compiles" the schemas. That is, JSCK generates the
tree of functions needed to validate a particular schema when you construct a
validator.  The schema is thus traversed only during preparation, and most of
the work of interpreting the schema is done at this time, rather than for every
document submitted for validation.  This minimizes the work required during
validation, which leads to substantial performance improvements over
non-compiling validators.


## Why JSON Schema?


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

JSCK does not support the full range of scope manipulations suggested by JSON
Schema drafts 3 and 4.  Scope manipulation is a controversial topic, and with
JSCK we have chosen to play it safe, supporting "id" declarations only in cases
that will (probably) not lead to any ambiguity. Specifically, JSCK uses "id"
declarations only in these cases:

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

JSCK uses the official [JSON Schema Test Suite][canonical] as well as some
custom tests. To run all tests for all versions:

    coffee test

See [this document](doc/tests.md) for more information on working with JSCK tests.


## Benchmarks

JSCK has fairly comprehensive benchmarks which show it to be the fastest JSON
Schema validator available for Node.js.  Pull requests welcome, of course.

Because performance varies (at very least) based on the complexity
of the schema being validated, we run benchmarks against several different
schemas, ranging from quite simple to moderately complex.  We currently measure
the time to complete a given number of document validations, but it would be
better to express this as the number of validations per second.  Soon.

For JSON Schema Draft4, we run benchmarks against JSCK, tv4, jayschema, and
z-schema.  On the
[trivial schema](benchmarks/draft4/trivial/schema.coffee),
our benchmarks produce this relative performance for these validators
(lower is better):

```coffee
JSCK: 1
z-schema: 2.1
tv4: 3.2
jayschema: 128
```


For the schema of [medium complexity](benchmarks/draft4/medium/schema.coffee),
our benchmarks produce this relative performance for the tested validators
(lower is better):

```coffee
JSCK: 1
z-schema: 2.7
tv4: 5.1
jayschema: 146
```

For the schema of [higher complexity](benchmarks/draft4/complex/schema.coffee),
our benchmarks produce this relative performance for the tested validators
(lower is better):

```coffee
JSCK: 1
z-schema: 3.6
tv4: 6.5
jayschema: 626
```

As the complexity of the schema increases, the performance benefits of the
compilation model become more evident.


See [this document](doc/benchmarks.md) for detailed results and information on
running and creating benchmarks.


## Plans

### 0.3
* improved validation error reports (reports are currently somewhat cryptic)
* support remote references
* use $schema values to determine which JSON Schema draft to use


[draft3_doc]:http://tools.ietf.org/html/draft-zyp-json-schema-03
[draft3_impl]:https://github.com/json-schema/json-schema/tree/master/draft-03
[draft4_doc]:http://tools.ietf.org/html/draft-zyp-json-schema-04
[canonical]:https://github.com/json-schema/JSON-Schema-Test-Suite
