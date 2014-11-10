assert = require "assert"
Testify = require "testify"

URI = require "../../../src/uri"

Testify.test "URI helper methods", (context) ->

  context.test "is_absolute", (context) ->

    context.test "URNs", ->
      assert.equal URI.is_absolute("urn:foo:bar:baz"), true
      assert.equal URI.is_absolute("urn"), false

    context.test "URLs", ->
      assert.equal URI.is_absolute("http://example.com:1452/smurf"), true
      assert.equal URI.is_absolute("example.com"), false


  context.test "is_url", ->
    assert.equal URI.is_url("https://monkeyshines.org/x?y=z"), true
    assert.equal URI.is_url("urn:foo:bar/baz,bat"), false


  context.test "resolve", (context) ->

    context.test "URL scope", (context) ->
      scope = "http://pandastrike.com/patchboard.json#"

      context.test "absolute reference", ->
        assert.equal URI.resolve(scope, "http://example.com/schema.json#"),
          "http://example.com/schema.json#"

      context.test "fragment", ->
        assert.equal URI.resolve(scope, "#service"),
          "http://pandastrike.com/patchboard.json#service"

      context.test "root reference", ->
        assert.equal URI.resolve(scope, "#"),
          "http://pandastrike.com/patchboard.json#"

      context.test "fragment reference", ->
        assert.equal URI.resolve(scope, "#/properties/resource"),
          "http://pandastrike.com/patchboard.json#/properties/resource"

      context.test "hierarchical references", ->
        assert.equal URI.resolve(scope, "other.json"),
          "http://pandastrike.com/other.json"

        scope = "http://pandastrike.com/schemas/patchboard.json#"
        assert.equal URI.resolve(scope, "other.json"),
          "http://pandastrike.com/schemas/other.json"

      context.test "scope reference, root reference", ->
        s = "http://pandastrike.com/patchboard.json#/properties/foo"
        assert.equal URI.resolve(s, "#"),
          "http://pandastrike.com/patchboard.json#"


    context.test "URI other than URL scope", (context) ->
      scope = "urn:jsck.anon#"

      context.test "fragment", ->
        assert.equal URI.resolve(scope, "#service"),
          "urn:jsck.anon#service"

      context.test "hierarchical references", ->
        assert.equal URI.resolve(scope, "other.json"),
          "urn:jsck.anon/other.json"

