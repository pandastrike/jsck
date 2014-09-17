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
project](https://github.com/json-schema/JSON-Schema-Test-Suite), except for the
use of `maxLength` and `minLength` with Unicode.


### Draft 3

Currently passing the canonical [test suite][canonical] for draft3 except for these items:

* `refRemote` (Trying to keep this lib synchronous for v0.1.x)
* `ref`
  * remote ref, containing refs itself
* `uniqueItems`
* `optional/zeroTerminatedFloats`
* `optional/format` (some of the regexes borrowed from [tdegrunt's validator](https://github.com/tdegrunt/jsonschema) aren't working for me)

To run all tests: `npm test`.

To run only the test suite named "disallow", use:

    coffee test/draft3_test.coffee disallow

And to run only the third test of that suite, use:

    coffee test/draft3_test.coffee disallow 3

You'll find the "disallow" test suite in the source tree. (Don't forget to initialize the git submodules! That test suite is in a git submodule.)

### Managing resolution scope with the "id" attribute


JSCK does not support the full range of scope manipulations suggested by drafts 3 and 4.  It uses "id" declarations only in these cases:

* at the top level of a schema, to provide a namespace for schemas not loaded from URIs.
* non-JSON-pointer fragments (`"id": "#user"`), which serve merely as aliases for specific subschemas, and are thus convenient and unambiguous.

For more information on the topic of scope manipulation, see this issue: https://github.com/json-schema/json-schema/issues/77.


## Benchmarks

Results of a simple [benchmark against other libs](./benchmarks/index.coffee). 8 iterations.  Units are ms.

```

JSCK: valid document, 128 times { max: 2.576,
  median: 0.9815,
  min: 0.951,
  mean: 1.35025,
  stdDev: 0.645323901231002,
  sample_size: 8 }

jsonschema: valid document, 128 times { max: 92.798,
  median: 76.19,
  min: 75.6,
  mean: 80.2935,
  stdDev: 6.329247526365201,
  sample_size: 8 }

JSV: valid document, 128 times { max: 95.777,
  median: 90.0435,
  min: 84.021,
  mean: 89.93912499999998,
  stdDev: 5.005647970979884,
  sample_size: 8 }

```


## Plans

### 0.1.0

* Boolean validation.
* Correct coverage of most of Draft 3
* benchmarking schemas of varying levels of complexity

### 0.2.0

* validation error reports
* complete support for "format"
* adding more comprehensive tests to the official test suite
* support remote references

### 0.3

* Support Draft 4

[draft3_doc]:http://tools.ietf.org/html/draft-zyp-json-schema-03
[draft3_impl]:https://github.com/json-schema/json-schema/tree/master/draft-03
[canonical]:https://github.com/json-schema/JSON-Schema-Test-Suite

## Rake tasks

Rubyists will find useful Rake tasks in a Rakefile. Ruby isn't required to work with or use JSCK, but it can come in handy.

