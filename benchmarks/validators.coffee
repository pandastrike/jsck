# stdlib
util = require "util"

# ours
Benchmark = require "./benchmark.coffee"

# Validators
JSCK = (draft) ->
  switch draft
    when 3 then require "../src/draft3"
    when 4 then require "../src/draft4"
  
JSONSchema= require('jsonschema').Validator
JSV = require("JSV").JSV
JaySchema = require("jayschema")
tv4 = require("tv4").tv4
jsonGateCreateSchema = require("json-gate").createSchema

# z-schema setup's pretty involved
z = require("z-schema")
request = require("request")

zValidator = new z()
remoteSchema = "http://json-schema.org/draft-04/schema"

request(remoteSchema, (error, response, body) ->
  zValidator.setRemoteReference(remoteSchema, JSON.parse(body)))

samples = 64

module.exports =

  benchmark: ({draft, name, schema, valid_doc, repeats}) ->

    console.log """

      Benchmarks for schema '#{name}'.  #{schema.description || ''}
      Sample size: #{samples}
      Validations per sample: #{repeats}

    """

    jsck = new Benchmark "JSCK: valid document", (bm) ->
      bm.setup -> new (JSCK draft)(schema)
      bm.measure (validator) ->
        for i in [1..repeats]
          result = validator.validate(valid_doc)

    jsonschema = new Benchmark "jsonschema: valid document", (bm) ->
      bm.setup -> new JSONSchema()
      bm.measure (validator) ->
        for i in [1..repeats]
          result = validator.validate(valid_doc, schema).errors

    if 4 == draft # jayschema and z-schema have trouble with draft 3

      jayschema = new Benchmark "jayschema: valid document", (bm) ->
        bm.setup -> new JaySchema()
        bm.measure (validator) ->
          for i in [1..repeats]
            result = validator.validate(valid_doc, schema)

      # note: z-schema will not recognize the valid doc as a valid doc
      zSchema = new Benchmark "z-schema: valid document", (bm) ->
        bm.setup -> zValidator
        bm.measure (validator) ->
          for i in [1..repeats]
            result = validator.validate(valid_doc, schema)

    tv4Benchmark = new Benchmark "tv4: valid document", (bm) ->
      bm.setup -> tv4
      bm.measure (validator) ->
        for i in [1..repeats]
          result = validator.validate(valid_doc, schema).error

    if 3 == draft # JSV and json-gate lack draft 4 support

      jsv_bm = new Benchmark "JSV: valid document", (bm) ->
        bm.setup ->
          jsv = JSV.createEnvironment("json-schema-draft-03")
          jsv.createSchema(schema)
        bm.measure (validator) ->
          for i in [1..repeats]
            result = validator.validate(valid_doc).errors

      jsonGate_bm = new Benchmark "json-gate: valid document", (bm) ->
        bm.setup ->
          jg = jsonGateCreateSchema(schema)
        bm.measure (validator) ->
          for i in [1..repeats]
            result = validator.validate(valid_doc)

    libraries = [
      jsck
      tv4Benchmark
      jsonschema
    ]

    switch draft
      when 3
        libraries.push jsv_bm
        libraries.push jsonGate_bm
      when 4
        libraries.push jayschema
        libraries.push zSchema

    results = Benchmark.compare libraries, {samples}

    console.log()
    for name, result of results
      {median, max, min, sample_size} = result.summarize()
      console.log "  #{name}"
      console.log util.format "  median: %d ms  max: %d ms  min: %d ms",
        median, max, min
      console.log()

