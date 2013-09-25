# JSCK

JSON Schema Compiled Check


```
$ npm install jsck
```

Usage:

```coffee
Validator = require("jsck").draft3
validator = new Validator(schema)
validator.validate(document)
```

Currently passing the canonical [test suite][canonical] for draft3 except for these items:

* `ref`
  * [nested refs](https://github.com/json-schema/JSON-Schema-Test-Suite/blob/develop/tests/draft3/ref.json#L106)
  * [remote ref](https://github.com/json-schema/JSON-Schema-Test-Suite/blob/develop/tests/draft3/ref.json#L129)
* `refRemote`
* `uniqueItems` (because this is a TERRIBLE idea performance-wise)
* everything in `optional/`

Simple (probably flawed) benchmark against other libs:

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

[canonical]:https://github.com/json-schema/JSON-Schema-Test-Suite

