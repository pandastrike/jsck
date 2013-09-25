
JSV = require("JSV").JSV
jsv = JSV.createEnvironment("json-schema-draft-03")
JSONSchema= require('jsonschema').Validator;
jsonschema = new JSONSchema()

JSCK = require "../src/draft3"

Benchmark = require "testify-benchmark"

schema =
  type: "object"
  #extends: {$ref: "#resource"}
  #mediaType: media_type("event")
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
      #format: "utc-millisec"
    data: { type: "object" }


valid_doc =
  origin: "monkey"
  name: "shines"
  tags: ["in", "the", "closet"]
  timestamp: Date.now()
  data:
    uno: 1
    dos: 2

report = (results) ->
  for key, value of results.data
    summary = value.data.summarize()
    console.log key
    console.log "    max:", summary.max / 1000, "ms"
    console.log "    median:", summary.median / 1000, "ms"
    console.log "    min:", summary.min / 1000, "ms"

iterations = 10
repeats = 500

jsv_test = Benchmark.measure "JSV", (bm) ->
  bm.measure "JSV", (bm) ->
    bm.measure "JSV, valid document, #{repeats} times", ->
      for i in [1..repeats]
        errors = jsv.validate(valid_doc, schema).errors
        throw new Error("fail") unless errors.length == 0

jsonschema_test = Benchmark.measure "jsonschema", (bm) ->
  bm.measure "jsonschema", (bm) ->
    bm.measure "jsonschema, valid document, #{repeats} times", ->
      for i in [1..repeats]
        errors = jsonschema.validate(valid_doc, schema).errors
        throw new Error("fail") unless errors.length == 0

jsck_test = Benchmark.measure "jsck", (bm) ->
  validator = new JSCK(schema)
  bm.measure "jsck", (bm) ->
    bm.measure "jsck, valid document, #{repeats} times", ->
      for i in [1..repeats]
        valid = validator.validate(valid_doc)
        throw new Error("fail") unless valid

#jsv_test.run {iterations: iterations}, (results) -> report(results)
jsonschema_test.run {iterations: iterations}, (results) -> report(results)
jsck_test.run {iterations: iterations}, (results) -> report(results)



