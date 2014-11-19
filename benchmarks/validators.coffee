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
# the z-schema tests.
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

    benchmarker = (description, theValidator, callback) ->
      libraries.push new Benchmark description, (bm) ->
        bm.setup -> theValidator
        bm.measure (validator) ->
          for i in [1..repeats]
            result = callback(validator)

    console.log """

      Benchmarks for schema '#{name}'.  #{schema.description || ''}
      Sample size: #{samples}
      Validations per sample: #{repeats}

    """

    # these validators work for either draft 3 or 4 of JSON Schema
    benchmarker("JSCK: valid document", new (JSCK draft)(schema), (validator) ->
      validator.validate(valid_doc))

    benchmarker("jsonschema: valid document", new JSONSchema(), (validator) ->
      validator.validate(valid_doc, schema).errors)

    benchmarker("tv4: valid document", tv4, (validator) ->
      validator.validate(valid_doc, schema).error)

    switch draft
      when 4 # these validators work only for draft 4 of JSON Schema

        benchmarker("jayschema: valid document", new JaySchema(), (validator) ->
          validator.validate(valid_doc, schema))

        # note: z-schema will not recognize the valid doc as a valid doc
        benchmarker("z-schema: valid document", zValidator, (validator) ->
          validator.validate(valid_doc, schema))

      when 3 # these validators work only for draft 3 of JSON Schema

        # note: amanda reports errors on integers as utc-millisec,
        # and on http://localhost:8998, due to a huge URL regex
        benchmarker("Amanda: valid document", amanda("json"), (validator) ->
          # pass Amanda an empty error-reporting function for generous benchmarking
          validator.validate(valid_doc, schema, () ->))

        jsv = JSV.createEnvironment("json-schema-draft-03")
        jsv.createSchema(schema)
        benchmarker("JSV: valid document", jsv, (validator) ->
          validator.validate(valid_doc).errors)

        benchmarker("json-gate: valid document", jsonGateCreateSchema(schema), (validator) ->
          validator.validate(valid_doc))

    results = Benchmark.compare libraries, {samples}

    console.log()
    for name, result of results
      {median, max, min, sample_size} = result.summarize()
      console.log "  #{name}"
      console.log util.format "  median: %d ms  max: %d ms  min: %d ms",
        median, max, min
      console.log()

