module.exports =

  "JSCK":
    setup: (schema) ->
      JSCK = require "../../src/draft3"
      new JSCK(schema)
    validate: ({validator, schema, document}) ->
      validator.validate(document)
    error: (result) ->
      if result.valid == true
        false
      else
        result.errors


  "amanda":
    setup: (schema) ->
      amanda = require "amanda"
    validate: ({validator, schema, document}) ->
      result = null
      validator.validate document, schema, (error) ->
        result = error
      result
    error: (result) ->
      result || false


  "JSV":
    setup: (schema) ->
      JSV = require("JSV").JSV
      jsv = JSV.createEnvironment("json-schema-draft-03")
      jsv.createSchema(schema)
    validate: ({validator, schema, document}) ->
      validator.validate(document)
    error: (result) ->
      if result.errors.length == 0
        false
      else
        result.errors


  "json-gate":
    setup: (schema) ->
      jsonGateCreateSchema = require("json-gate").createSchema
      jsonGateCreateSchema(schema)
    validate: ({validator, schema, document}) ->
      try
        validator.validate(document)
      catch e
        e
    error: (result) ->
      result || false


