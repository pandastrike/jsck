module.exports =

  "JSCK":
    setup: (schema) ->
      JSCK = require "../../src/draft4"
      new JSCK(schema)
    validate: ({validator, schema, document}) ->
      validator.validate(document)
    error: (result) ->
      if result.valid == true
        false
      else
        result.errors


  "tv4":
    setup: (schema) ->
      require("tv4").tv4
    validate: ({validator, schema, document}) ->
      validator.validateResult(document, schema)
    error: (result) ->
      if result.valid == true
        false
      else
        result.error

  "Themis[minimal]":
    setup: (schema) ->
      Themis = require('themis')
      Themis.validator(schema, { enable_defaults: false, algorithm: 'none', errors: { messages: false, validator_value: false, schema: false } })
    validate: ({validator, schema, document}) ->
      validator(document, '0')
    error: (result) ->
      if result.valid == true
        false
      else
        result.errors

  "Themis":
    setup: (schema) ->
      Themis = require('themis')
      Themis.validator(schema)
    validate: ({validator, schema, document}) ->
      validator(document, '0')
    error: (result) ->
      if result.valid == true
        false
      else
        result.errors

  "jayschema":
    setup: (schema) ->
      JaySchema = require("jayschema")
      new JaySchema()
    validate: ({validator, schema, document}) ->
      validator.validate(document, schema)
    error: (result) ->
      if result.length == 0
        false
      else
        result

  "is-my-json-valid":
    setup: (schema) ->
      require("is-my-json-valid")(schema)
    validate: ({validator, schema, document}) ->
      validator(document)
    error: (result) ->
      if result == true
        false
      else
        validator.errors


  ## Disabled because it refuses to accept one of our schemas
  #"jsonschema":
    #setup: (schema) ->
      #JSONSchema = require('jsonschema').Validator
      #new JSONSchema()
    #validate: ({validator, schema, document}) ->
      #validator.validate(document, schema)
    #error: (result) ->
      # throw "unimplemented"

  # Putting z-schema last because it appears to be affecting other libs'
  # performance if run first.
  "z-schema":
    setup: (schema) ->
      z = require("z-schema")
      validator = new z()
      url = "http://json-schema.org/draft-04/schema"
      # don't actually download the draft, because GitHub Pages might be down.
      actualDraft = require("fs").readFileSync("./test/json-schema/draft-04/schema", "utf8")
      validator.setRemoteReference(url, JSON.parse(actualDraft))
      validator

    validate: ({validator, schema, document}) ->
      valid = validator.validate(document, schema)
      if valid == false
        validator.getLastErrors()


    error: (result) ->
      result || false
