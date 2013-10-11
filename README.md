# JSON Schema Compiled ChecK

Fast validation against JSON Schema Draft 3

## Installation

```
$ npm install jsck
```


## About

Supports most of JSON Schema Draft 3. [Documentation][draft3_doc] and [implementation][draft3_impl].

JSCK is a "compiling" schema validator, meaning that it traverses a schema only once (at instantiation)
and generates the functions needed to validate documents against the schema.
By doing so, it avoids the need to re-traverse the schema structure for every document it validates.
This leads to substantial performance improvements.

At this time, JSCK can only tell you whether a document passes validation, not where it failed or why.


## Usage


```.coffee

Validator = require("../src/index").draft3

# a schema without an "id" declaration

validator = new Validator
  definitions:
    user:
      type: "object"
      properties:
        login:
          required: true
          type: "string"
          pattern: "^[\\w\\d_]{3,32}$"
        email:
          type: "string"

{valid} = validator.validate
  user:
    login: "automatthew"
    email: "automatthew@mailinator.com"

console.log "Anonymous schema:", valid


```


### [Advanced usage examples](examples/draft3_advanced.coffee)



## Coverage

Currently passing the canonical [test suite][canonical] for draft3 except for these items:

* `refRemote` (Trying to keep this lib synchronous for v0.1.x)
* `ref`
  * remote ref, containing refs itself
* `uniqueItems` (because this is a TERRIBLE idea performance-wise)
* `optional/zeroTerminatedFloats`
* `optional/format` (some of the regexes borrowed from [tdegrunt's validator](https://github.com/tdegrunt/jsonschema) aren't working for me)
  * validation of date-time strings
  * validation of CSS colors
  * validation of host names


### The "id" mess

I agree with the objections stated in this issue: https://github.com/json-schema/json-schema/issues/77.

JSCK, therefore, does not support the full range of scope manipulations suggested by drafts 3 and 4.  It ignores "id" declarations except in these cases:

* at the top level of a schema, to provide a namespace for schemas not loaded from URIs.
* non-JSON-pointer fragments (`"id": "#user"`), which serve merely as aliases for specific subschemas, and are thus convenient and unambiguous.


## Benchmarks

Results of a simple (probably flawed) [benchmark against other libs](./benchmarks/event.coffee). 8 iterations.  Units are ms.

```

JSCK: valid document, 400 times { max: 2.596,
  median: 0.494,
  min: 0.491,
  mean: 0.76,
  stdDev: 0.6940034221817643,
  sample_size: 8 }

jsonschema: valid document, 400 times { max: 224.818,
  median: 194.503,
  min: 183.965,
  mean: 198.83875,
  stdDev: 14.102769335754596,
  sample_size: 8 }

JSV: valid document, 400 times { max: 5778.058,
  median: 5707.239,
  min: 5664.46,
  mean: 5713.368375,
  stdDev: 38.30406714024464,
  sample_size: 8 }

```

I find it difficult to believe JSV is actually that slow, so it's probably my fault. Possibly incorrect usage of JSV.


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

