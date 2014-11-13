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

samples = 64

module.exports =

  benchmark: ({draft, name, schema, valid_doc, repeats}) ->

    console.log JSCK
    console.log draft

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

    ## Only valid for draft3 ATM.
    #jsv_bm = new Benchmark "JSV: valid document", (bm) ->
      #bm.setup ->
        #jsv = JSV.createEnvironment("json-schema-draft-03")
        #jsv.createSchema(schema)
      #bm.measure (validator) ->
        #for i in [1..repeats]
          #result = validator.validate(valid_doc).errors

    results = Benchmark.compare [jsck, jsonschema], {samples}

    console.log()
    for name, result of results
      {median, max, min, sample_size} = result.summarize()
      console.log "  #{name}"
      console.log util.format "  median: %d ms  max: %d ms  min: %d ms",
        median, max, min
      console.log()

