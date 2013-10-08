JSV = require("JSV").JSV
JSONSchema= require('jsonschema').Validator
JSCK = require "../src/draft3"

Benchmark = require "./benchmark.coffee"

schema =
  type: "object"
  additionalProperties: false
  properties:
    origin:
      required: true
      type: "string"
    name:
      type: "string"
      required: true
    tags:
      type: "array"
      items: {type: "string"}
    timestamp:
      type: "integer"
      format: "utc-millisec"
    data: { type: "object" }


valid_doc =
  origin: "monkey"
  name: "shines"
  tags: ["in", "the", "closet"]
  timestamp: Date.now()
  data:
    uno: 1
    dos: 2

repeats = 400

jsck = new Benchmark "JSCK: valid document, #{repeats} times", (bm) ->
  bm.setup -> new JSCK(schema)
  bm.measure (validator) ->
    for i in [1..repeats]
      valid = validator.validate(valid_doc)


jsonschema = new Benchmark "jsonschema: valid document, #{repeats} times", (bm) ->
  bm.setup -> new JSONSchema()
  bm.measure (validator) ->
    for i in [1..repeats]
      errors = validator.validate(valid_doc, schema).errors

jsv_bm = new Benchmark "JSV: valid document, #{repeats} times", (bm) ->
  bm.setup -> JSV.createEnvironment("json-schema-draft-03")
  bm.measure (validator) ->
    for i in [1..repeats]
      errors = validator.validate(valid_doc, schema).errors



results = Benchmark.compare [jsck, jsonschema, jsv_bm],
  #warmup: 8
  iterations: 8

console.log()
for name, result of results
  console.log name, result.summarize()
  console.log()


