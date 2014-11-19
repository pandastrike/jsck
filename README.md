# JSON Schema Compiled ChecK

The fastest JSON Schema validator for Node.js.

Supports drafts 3 and 4, with a few caveats (see below).


## Installation

To use it in your project:

```
npm install jsck
```

To contribute, hack on it, or run the tests:

```
git clone git@github.com:pandastrike/jsck.git && \
cd jsck && \
git submodule init && \
npm install
```


## About


JSCK is a "compiling" schema validator, meaning that it traverses a schema only once (at instantiation)
and generates the functions needed to validate documents against the schema.
By doing so, it avoids the need to re-traverse the schema structure for every document it validates.
This leads to substantial performance improvements.

JSCK reports schema errors, but somewhat cryptically. PRs welcome.

Supports most of JSON Schema Drafts 3 and/or 4.


## Usage

Here's a simple example:

```.coffee

JSCK = require("../src/index").draft3

# a schema without an "id" declaration

jsck = new JSCK
  type: "object"
  properties:
    user:
      type: "object"
      properties:
        login:
          required: true
          type: "string"
          pattern: "^[\\w\\d_]{3,32}$"
        email:
          type: "string"

{valid} = jsck.validate
  user:
    login: "automatthew"
    email: "automatthew@mailinator.com"

console.log "Anonymous schema:", valid
```

This example uses Draft 3. To use Draft 4:

```.coffee
JSCK = require("../src/index").draft4
```


### [Advanced usage examples](examples/draft3_advanced.coffee)



## Coverage

### Draft 4

JSCK passes all tests in the [canonical JSON Schema Test Suite
project](https://github.com/json-schema/JSON-Schema-Test-Suite), except for these items:

* use of `maxLength` and `minLength` with some Unicode characters.
* `refRemote` (Trying to keep this lib synchronous for v0.1.x)
* `ref`
  * remote ref, containing refs itself
* `uniqueItems`
* `optional/zeroTerminatedFloats`


### Draft 3

Currently passing the canonical [test suite][canonical] for draft3 except for these items:

* `refRemote` (Trying to keep this lib synchronous for v0.1.x)
* `ref`
  * remote ref, containing refs itself
* `uniqueItems`
* `optional/zeroTerminatedFloats`


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


### Managing resolution scope with the "id" attribute


JSCK does not support the full range of scope manipulations suggested by drafts 3 and 4.  It uses "id" declarations only in these cases:

* at the top level of a schema, to provide a namespace for schemas not loaded from URIs.
* non-JSON-pointer fragments (`"id": "#user"`), which serve merely as aliases for specific subschemas, and are thus convenient and unambiguous.

For more information on the topic of scope manipulation, see this issue: https://github.com/json-schema/json-schema/issues/77.


## Benchmarks

JSCK has fairly comprehensive benchmarks which show it to be the fastest JSON Schema validator available for Node.js.

Pull requests welcome, of course.

```
$ coffee benchmarks/draft3/trivial/ && \
  coffee benchmarks/draft3/medium/ && \
  coffee benchmarks/draft4/trivial/ && \
  coffee benchmarks/draft4/medium/

Benchmarks for schema 'Event'.  A simple schema, exercising very few attributes
Sample size: 64
Validations per sample: 256

  JSCK: valid document
  Iterations: ................................................................

  tv4: valid document
  Iterations: ................................................................

  jsonschema: valid document
  Iterations: ................................................................

  JSV: valid document
  Iterations: ................................................................

  json-gate: valid document
  Iterations: ................................................................


  JSCK: valid document
  median: 1.2574999999999998 ms  max: 6.942 ms  min: 1.157 ms

  tv4: valid document
  median: 4.026 ms  max: 15.886 ms  min: 3.604 ms

  jsonschema: valid document
  median: 101.827 ms  max: 129.378 ms  min: 98.395 ms

  JSV: valid document
  median: 102.7185 ms  max: 124.258 ms  min: 101.037 ms

  json-gate: valid document
  median: 3.557 ms  max: 9.822 ms  min: 3.306 ms


Benchmarks for schema 'Configuration'.  A moderately complex schema with some nesting and value constraints
Sample size: 64
Validations per sample: 128

  JSCK: valid document
  Iterations: ................................................................

  tv4: valid document
  Iterations: ................................................................

  jsonschema: valid document
  Iterations: ................................................................

  JSV: valid document
  Iterations: ................................................................

  json-gate: valid document
  Iterations: ................................................................


  JSCK: valid document
  median: 0.983 ms  max: 3.31 ms  min: 0.882 ms

  tv4: valid document
  median: 4.151 ms  max: 25.851 ms  min: 3.879 ms

  jsonschema: valid document
  median: 100.5505 ms  max: 213.665 ms  min: 92.328 ms

  JSV: valid document
  median: 152.74 ms  max: 184.7 ms  min: 104.712 ms

  json-gate: valid document
  median: 3.298 ms  max: 9.591 ms  min: 3.148 ms


Benchmarks for schema 'Event'.  A simple schema, exercising very few attributes
Sample size: 64
Validations per sample: 256

  JSCK: valid document
  Iterations: ................................................................

  tv4: valid document
  Iterations: ................................................................

  jsonschema: valid document
  Iterations: ................................................................

  jayschema: valid document
  Iterations: ................................................................

  z-schema: valid document
  Iterations: ................................................................


  JSCK: valid document
  median: 1.2934999999999999 ms  max: 5.738 ms  min: 1.166 ms

  tv4: valid document
  median: 7.718999999999999 ms  max: 20.149 ms  min: 5.248 ms

  jsonschema: valid document
  median: 119.27850000000001 ms  max: 197.015 ms  min: 100.992 ms

  jayschema: valid document
  median: 211.01749999999998 ms  max: 379.6 ms  min: 184.505 ms

  z-schema: valid document
  median: 4.4719999999999995 ms  max: 7.517 ms  min: 2.606 ms


Benchmarks for schema 'Configuration'.  A moderately complex schema with some nesting and value constraints
Sample size: 64
Validations per sample: 128

  JSCK: valid document
  Iterations: ................................................................

  tv4: valid document
  Iterations: ................................................................

  jsonschema: valid document
  Iterations: ................................................................

  jayschema: valid document
  Iterations: ................................................................

  z-schema: valid document
  Iterations: ................................................................


  JSCK: valid document
  median: 1.225 ms  max: 4.961 ms  min: 0.819 ms

  tv4: valid document
  median: 7.569 ms  max: 28.811 ms  min: 5.874 ms

  jsonschema: valid document
  median: 107.253 ms  max: 202.845 ms  min: 96.152 ms

  jayschema: valid document
  median: 193.698 ms  max: 367.262 ms  min: 185.398 ms

  z-schema: valid document
  median: 3.4699999999999998 ms  max: 10.358 ms  min: 3.276 ms
```

## Plans

### 0.2.0

* improved validation error reports (reports are currently somewhat cryptic)
* adding more comprehensive tests to the official test suite
* Support Draft 4

### 0.3
* support remote references


[draft3_doc]:http://tools.ietf.org/html/draft-zyp-json-schema-03
[draft3_impl]:https://github.com/json-schema/json-schema/tree/master/draft-03
[canonical]:https://github.com/json-schema/JSON-Schema-Test-Suite

## Rake tasks

Rubyists will find useful Rake tasks in a Rakefile. Ruby isn't required to work with or use JSCK, but it can come in handy.

