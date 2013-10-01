# JSON Schema Compiled ChecK

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

* `refRemote` (Trying to keep this lib synchronous)
* `ref`
  * remote ref, containing refs itself
* `uniqueItems` (because this is a TERRIBLE idea performance-wise)
* `optional/zeroTerminatedFloats`
* `optional/format` (some of the regexes borrowed from [tdegrunt's validator](https://github.com/tdegrunt/jsonschema) aren't working for me)
  * validation of date-time strings
  * validation of CSS colors
  * validation of host names


## Benchmarks

Results of a simple (probably flawed) benchmark against other libs:

```

JSV, valid document, 500 times
    max: 6974.391 ms
    median: 6847.857 ms
    min: 6803.736 ms

jsonschema, valid document, 500 times
    max: 293.52 ms
    median: 266.3855 ms
    min: 252.324 ms

jsck, valid document, 500 times
    max: 2.478 ms
    median: 0.9375 ms
    min: 0.897 ms

```

I find it difficult to believe JSV is actually that slow, so it's probably my fault. Possibly incorrect usage of JSV.

[draft3_doc]:http://tools.ietf.org/html/draft-zyp-json-schema-03
[draft3_impl]:https://github.com/json-schema/json-schema/tree/master/draft-03
[canonical]:https://github.com/json-schema/JSON-Schema-Test-Suite

