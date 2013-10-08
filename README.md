# JSON Schema Compiled ChecK

Fast validation against JSON Schema Draft 3

## Installation

```
$ npm install jsck
```

## Usage

```coffee
Validator = require("jsck").draft3
validator = new Validator(schema)
validator.validate(document)
```

## About

The JSON Schema Draft 3 [documentation][draft3_doc] and [implementation][draft3_impl]

JSCK is a "compiling" schema validator, meaning that it traverses a schema only once (at instantiation)
and generates the functions needed to validate documents against the schema.
By doing so, it avoids the need to re-traverse the schema structure for every document it validates.
This leads to substantial performance improvements.

At this time, JSCK can only tell you whether a document passes validation, not where it failed or why.


## Coverage

Currently passing the canonical [test suite][canonical] for draft3 except for these items:

ref: [ 'remote ref, containing refs itself' ]
refRemote
uniqueItems
optional/zeroTerminatedFloats
optional/format: [ 'validation of date-time strings',
  'validation of CSS colors',
  'validation of host names' ]

* `refRemote` (Trying to keep this lib synchronous for v0.1.x)
* `ref`
  * remote ref, containing refs itself
* `uniqueItems` (because this is a TERRIBLE idea performance-wise)
* `optional/zeroTerminatedFloats`
* `optional/format` (some of the regexes borrowed from [tdegrunt's validator](https://github.com/tdegrunt/jsonschema) aren't working for me)
  * validation of date-time strings
  * validation of CSS colors
  * validation of host names


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

[draft3_doc]:http://tools.ietf.org/html/draft-zyp-json-schema-03
[draft3_impl]:https://github.com/json-schema/json-schema/tree/master/draft-03
[canonical]:https://github.com/json-schema/JSON-Schema-Test-Suite

