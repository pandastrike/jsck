# stdlib
util = require "util"

# our simple benchmarking library
Benchmark = require "./benchmark.coffee"
samples = 64

# require the various benchmarked libs
amanda = require "amanda"
JSONSchema = require('jsonschema').Validator
JSV = require("JSV").JSV
JaySchema = require("jayschema")
tv4 = require("tv4").tv4
jsonGateCreateSchema = require("json-gate").createSchema

# z-schema setup is pretty involved
z = require("z-schema")
request = require("request")

zValidator = new z()
remoteSchema = "http://json-schema.org/draft-04/schema"

# don't actually download the draft, because GitHub Pages might be down.
# yet you still set the URL as a remote reference - it's how it's done in
# z-schema tests.
actualDraft = require("fs").readFileSync("./test/json-schema/draft-04/schema", "utf8")
request(remoteSchema, (error, response, body) ->
  zValidator.setRemoteReference(remoteSchema, JSON.parse(actualDraft)))

JSCK = (draft) ->
  switch draft
    when 3 then require "../src/draft3"
    when 4 then require "../src/draft4"



# do the actual benchmarking
module.exports =

  benchmark: ({draft, name, schema, valid_doc, repeats}) ->

    libraries = []

    console.log """

      Benchmarks for schema '#{name}'.  #{schema.description || ''}
      Sample size: #{samples}
      Validations per sample: #{repeats}

    """

    # these validators work for either draft 3 or 4 of JSON Schema
    jsck = new Benchmark "JSCK: valid document", (bm) ->
      bm.setup -> new (JSCK draft)(schema)
      bm.measure (validator) ->
        for i in [1..repeats]
          result = validator.validate(valid_doc)
    libraries.push jsck

    jsonschema = new Benchmark "jsonschema: valid document", (bm) ->
      bm.setup -> new JSONSchema()
      bm.measure (validator) ->
        for i in [1..repeats]
          result = validator.validate(valid_doc, schema).errors
    libraries.push jsonschema

    tv4Benchmark = new Benchmark "tv4: valid document", (bm) ->
      bm.setup -> tv4
      bm.measure (validator) ->
        for i in [1..repeats]
          result = validator.validate(valid_doc, schema).error
    libraries.push tv4Benchmark

    switch draft
      when 4 # these validators work only for draft 4 of JSON Schema

        jayschema = new Benchmark "jayschema: valid document", (bm) ->
          bm.setup -> new JaySchema()
          bm.measure (validator) ->
            for i in [1..repeats]
              result = validator.validate(valid_doc, schema)
        libraries.push jayschema

        # note: z-schema will not recognize the valid doc as a valid doc
        zSchema = new Benchmark "z-schema: valid document", (bm) ->
          bm.setup -> zValidator
          bm.measure (validator) ->
            for i in [1..repeats]
              result = validator.validate(valid_doc, schema)
        libraries.push zSchema

    # these validators work only for draft 3 of JSON Schema
      when 3

        # note: amanda reports errors on integers as utc-millisec,
        # and on http://localhost:8998, due to a huge URL regex
        amanda_bm = new Benchmark "Amanda: valid document", (bm) ->
          bm.setup ->
            amandaValidator = amanda("json")
          bm.measure (validator) ->
            for i in [1..repeats]
              # pass Amanda an empty error-reporting function
              result = validator.validate(valid_doc, schema, () ->)
        libraries.push amanda_bm

        jsv_bm = new Benchmark "JSV: valid document", (bm) ->
          bm.setup ->
            jsv = JSV.createEnvironment("json-schema-draft-03")
            jsv.createSchema(schema)
          bm.measure (validator) ->
            for i in [1..repeats]
              result = validator.validate(valid_doc).errors
        libraries.push jsv_bm

        jsonGate_bm = new Benchmark "json-gate: valid document", (bm) ->
          bm.setup ->
            jg = jsonGateCreateSchema(schema)
          bm.measure (validator) ->
            for i in [1..repeats]
              result = validator.validate(valid_doc)
        libraries.push jsonGate_bm

    results = Benchmark.compare libraries, {samples}

    console.log()
    for name, result of results
      {median, max, min, sample_size} = result.summarize()
      console.log "  #{name}"
      console.log util.format "  median: %d ms  max: %d ms  min: %d ms",
        median, max, min
      console.log()

