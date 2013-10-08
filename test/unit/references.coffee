assert = require "assert"
Testify = require "testify"

Validator = require("../../src/index").draft3


Testify.test "JSCK draft 3 dereferencing", (context) ->

  context.test "validate_schema", (context) ->
    validator = new Validator
      id: "urn:jsck.test"
      type: "object"
      properties:
        user_list:
          id: "#user_list"
          type: "array"
          items: {$ref: "#/properties/user"}

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
      result = validator.validate_schema "urn:jsck.test#/properties/user", {name: "automatthew"}
      assert.equal result.valid, true

    context.test "id fragment", ->
      result = validator.validate_schema "urn:jsck.test#user", {name: "automatthew"}
      assert.equal result.valid, true



  context.test "find_schema", (context) ->
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

    validator = new Validator(test_schema)

    context.test "JSON pointers", (context) ->

      context.test "URI relative to root", ->
        schema = validator.find_schema "#/schema1"
        assert.deepEqual schema, test_schema.schema1

        schema = validator.find_schema "#/schema2/nested"
        assert.deepEqual schema, test_schema.schema2.nested

      context.test "Absolute URI", ->
        schema = validator.find_schema "http://x.y.z/rootschema.json#/schema1"
        assert.deepEqual schema, test_schema.schema1

        schema = validator.find_schema "http://x.y.z/rootschema.json#/schema2/nested"
        assert.deepEqual schema, test_schema.schema2.nested

    context.test "Setting scope with 'id'", (context) ->

      context.test "fragment", ->
        schema = validator.find_schema "http://x.y.z/rootschema.json#foo"
        assert.deepEqual schema, test_schema.schema1

      context.test "path change", ->
        schema = validator.find_schema "http://x.y.z/otherschema.json#bar"
        assert.deepEqual schema, test_schema.schema2.nested

      context.test "nested path change", ->
        schema = validator.find_schema "http://x.y.z/t/inner.json#a"
        assert.deepEqual schema, test_schema.schema2.alsonested

    context.test "Inline reference resolution", ->
      schema = validator.find_schema "#/schema4"
      assert.deepEqual schema, test_schema.schema1




