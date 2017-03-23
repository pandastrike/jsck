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

  "ajv":
    setup: (schema) ->
      ajv = require("ajv")()
      ajv.compile(schema)
    validate: ({validator, schema, document}) ->
      validator(document)
    error: (result) ->
      if result == true
        false
      else
        validator.errors

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

  "Themis (minimal)":
    setup: (schema) ->
      Themis = require('themis')
      Themis.validator(schema, {
        enable_defaults: false,
        algorithm: 'none',
        errors: { messages: false, validator_value: false, schema: false } })
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


  # Putting z-schema last because it appears to be affecting other libs'
  # performance if run first.
  "z-schema":
    setup: (schema) ->
      z = require("z-schema")
      validator = new z()
      url = "http://json-schema.org/draft-04/schema"
      # don't actually download the draft, because GitHub Pages might be down.
      validator.setRemoteReference(url, require('./draft-4-schema.json'))
      validator

    validate: ({validator, schema, document}) ->
      valid = validator.validate(document, schema)
      if valid == false
        validator.getLastErrors()


    error: (result) ->
      result || false

  "jsen":
    setup: (schema) ->
      require("jsen")(schema)
    validate: ({validator, schema, document}) ->
      validator(document)
    error: (result) ->
      if result == true
        false
      else
        validator.errors
