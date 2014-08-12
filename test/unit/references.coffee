assert = require "assert"
Testify = require "testify"

JSCK = require("../../src/index").draft3


Testify.test "JSCK draft 3 dereferencing", (context) ->

  context.test "Finding by uri", (context) ->
    jsck = new JSCK
      $schema: "http://json-schema.org/draft-03/schema#"
      id: "urn:jsck.test"
      type: "object"
      properties:
        user_list:
          id: "#user_list"
          type: "array"
          items: {$ref: "#/properties/user"}
        user_dict: {$ref: "#/properties/user"}

        user:
          id: "#user"
          type: "object"
          properties:
            name:
              required: true
              type: "string"
            email:
              type: "string"

    context.test "JSON Pointer", ->
      result = jsck.validator("urn:jsck.test#/properties/user").validate {name: "automatthew"}
      assert.equal result.valid, true

    context.test "id fragment", ->
      result = jsck.validator("urn:jsck.test#user").validate {name: "automatthew"}
      assert.equal result.valid, true


  return
  context.test "schema without 'id'", (context) ->

    test_schema =
      definitions:
        schema1:
          id: "#foo"
          type: "string"
          format: "uri"

    jsck = new JSCK(test_schema)
    context.test "JSON pointers", (context) ->

      context.test "Pointer relative to empty URI", ->
        schema = jsck.find "#/foo"
        assert.deepEqual schema, test_schema.schema1



  context.test "find", (context) ->
    test_schema =
      id: "http://x.y.z/rootschema.json#"
      schema1:
        id: "#foo"
      schema2:
        id: "otherschema.json"
        type: "string"
        nested:
          id: "#bar"
        alsonested:
          id: "t/inner.json#a"
      schema3:
        id: "some://where.else/completely#"
      schema4:
        $ref: "#foo"

    jsck = new JSCK(test_schema)

    context.test "JSON pointers", (context) ->

      context.test "Absolute URI", ->
        schema = jsck.find "http://x.y.z/rootschema.json#/schema1"
        assert.deepEqual schema, test_schema.schema1

        schema = jsck.find "http://x.y.z/rootschema.json#/schema2/nested"
        assert.deepEqual schema, test_schema.schema2.nested

    context.test "Setting scope with 'id'", (context) ->

      context.test "works for fragment", ->
        schema = jsck.find "http://x.y.z/rootschema.json#foo"
        assert.deepEqual schema, test_schema.schema1

      context.test "ignores path change", ->
        schema = jsck.find "http://x.y.z/otherschema.json#bar"
        assert.deepEqual schema, undefined

      context.test "ignores nested path change", ->
        schema = jsck.find "http://x.y.z/t/inner.json#a"
        assert.deepEqual schema, undefined

    context.test "Inline reference resolution", ->
      schema = jsck.find "http://x.y.z/rootschema.json#/schema4"
      assert.deepEqual schema, test_schema.schema1




