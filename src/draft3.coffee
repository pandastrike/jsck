URI = require "./uri"
deap = require "deap"

attributes = require "./draft3/attributes"

escape = (string) ->
  string
    .replace(/~0/g, "~")
    .replace(/~1/g, "/")
    .replace(/%25/g, "%")

class Runtime
  constructor: ({@errors, @pointer}) ->

  child: (token) ->
    new @constructor
      errors: @errors
      pointer: "#{@pointer}/#{token}"

  error: (context) ->
    @errors.push
      document:
        pointer: @pointer
      schema:
        pointer: context.pointer


class Context

  constructor: ({@pointer, @scope}) ->

  child: (token) ->
    new Context
      pointer: "#{@pointer}/#{token}"
      scope: @scope

  sibling: (token) ->
    pointer = @pointer.replace(/\/.*$/, "/#{token}")
    new Context
      pointer: pointer
      scope: @scope

module.exports = class Validator

  DRAFT_3_URI = "http://json-schema.org/draft-03/schema#"

  # Mix in methods from the modules where they live.
  modules = [
    "type"
    "numeric"
    "comparison"
    "arrays"
    "objects"
    "strings"
  ]

  for module_name in modules
    m = require "./draft3/#{module_name}"
    for name, method of m
      Validator.prototype[name] = method


  constructor: (schemas...) ->
    @uris = {}
    @media_types = {}
    @unresolved = {}

    for schema in schemas
      if schema["$schema"]? && schema["$schema"] != DRAFT_3_URI
        throw "This validator doesn't support this JSON schema."

      @add(schema)

  add: (schema) ->
    schema = deap.clone(schema)

    if schema.id
      # Make sure the schema id always ends with "#"
      schema.id = schema.id.replace /#?$/, "#"

    context = new Context
      pointer: schema.id || "#"
      scope: schema.id || "#"
    @compile_references schema, context

    # We try one more time to resolve $ref values, because
    # a schema may have been defined after we initially
    # tried to resolve the $ref.
    for ref, {scope, uri} of @unresolved
      if found_schema = @resolve_ref(uri, scope)
        delete @unresolved[ref]
        @register ref, found_schema
    if Object.keys(@unresolved).length > 0
      pointers = (uri for key, {uri} of @unresolved)
      throw new Error "Unresolvable $ref values: #{JSON.stringify pointers}"

    @compile(schema, context)

  register: (uri, schema) ->
    @uris[uri] = schema
    # TODO: enforce uniqueness of types
    if media_type = schema.mediaType
      if media_type != "application/json"
        @media_types[media_type] = schema

  validate: (data) ->
    @validator("#").validate(data)

  validator: (arg) ->
    if schema = @find arg
      validate: (data) =>
        errors = []
        runtime = new Runtime {errors, pointer: "#"}
        schema._test(data, runtime)
        if errors.length > 0
          for error in errors
            [base..., attribute] = error.schema.pointer.split("/")
            pointer = base.join("/")
            error.schema.definition = @resolve_ref(pointer)?[attribute]

        valid = runtime.errors.length == 0
        {valid, errors}
      toJSON: (args...) =>
        schema
    else
      throw new Error "No schema found for '#{JSON.stringify(arg)}'"

  find: (arg) ->
    if @test_type "string", arg
      uri = escape(arg)
      @uris[uri]
    else if uri = arg.uri
      uri = escape(uri)
      @uris[uri]
    else if media_type = arg.mediaType
      @media_types[media_type]
    else
      null


  resolve_ref: (uri, scope) ->
    if schema = @find(uri)
      if schema.$ref
        uri = URI.resolve(scope, schema.$ref)
        @resolve_ref(uri)
      else
        return schema
    else
      null


  compile_references: (schema, context) ->
    {scope, pointer} = context
    @register pointer, schema
    # This is one of the two cases where we pay attention to "id". The other is
    # top-level id declaration. Here, we treat non-JSON-pointer fragments (such
    # as "#user") as aliases.
    if schema.id && schema.id.indexOf("#") == 0
      uri = URI.resolve scope, schema.id
      schema.id = uri
      @register uri, schema

    if @test_type "object", schema
      for attribute, definition of schema
        new_context = context.child(attribute)
        switch attribute
          when "$ref"
            uri = URI.resolve(scope, definition)

            # ignore recursive references
            if pointer.indexOf(uri + "/") != 0
              schema.$ref = uri
              if schema = @resolve_ref(uri, scope)
                @compile_references schema, context
              else
                @unresolved[pointer] = {scope: context.scope, uri: uri}

          when "type"
            if @test_type "array", definition
              @type_refs definition, new_context
          when "properties", "patternProperties"
            @dictionary_refs definition, new_context
          when "items"
            @items_refs definition, new_context
          when "additionalItems", "additionalProperties", "extends"
            @compile_references definition, context.child(attribute)
          else
            if !attributes[attribute] && @test_type("object", definition)
              @compile_references definition, context.child(attribute)


  type_refs: (union, context) ->
    for schema, i in union
      if @test_type "object", schema
        @compile_references schema, context.child(i.toString())

  dictionary_refs: (properties, context) ->
    for key, schema of properties
      @compile_references schema, context.child(key)
  
  items_refs: (definition, context) ->
    if @test_type "array", definition
      for def, i in definition
        @compile_references def, context.child(i.toString())
    else
      @compile_references definition, context


  compile: (schema, context) ->
    {scope, pointer} = context
    tests = []

    if uri = schema.$ref
      uri = URI.resolve(scope, uri)
      if pointer.indexOf(uri) == 0
        # When the URI of a $ref is a substring of the present context's URI,
        # we're in a recursive reference situation.
        return @recursive_test(schema, context)
      schema = @find(uri)
      if !schema
        throw new Error "No schema found for $ref '#{uri}'"

    if extended = schema.extends
      if ref = extended.$ref
        uri = URI.resolve(scope, ref)
        extended = @find(uri)
        if !extended
          throw new Error "No schema found for $ref '#{ref}'"

      delete schema.extends
      if @test_type "array", extended
        deap.merge(schema, extended...)
      else
        deap.merge(schema, extended)


    for attribute, definition of schema
      if spec = attributes[attribute]
        if !spec.ignore
          new_context = context.child(attribute)
          new_context.modifiers = {}
          if spec.modifiers
            for key in spec.modifiers
              new_context.modifiers[key] = schema[key]

          # Delegate to a handler named after the attribute
          if test = @[attribute](definition, new_context)
            test.pointer = new_context.pointer
            tests.push test
      else
        if @test_type "object", definition
          @compile definition, context.child(attribute)

    test_function = (data, runtime) =>
      for test in tests
        test(data, runtime)

    if schema.id
      uri = URI.resolve scope, schema.id
      @find(uri)?._test = test_function
    @find(pointer)?._test = test_function
    test_function


  recursive_test: (schema, {scope, pointer}) ->
    uri = URI.resolve(scope, schema.$ref)
    if schema = @find uri
      (data, runtime) =>
        schema._test(data, runtime)
    else
      throw new Error "No schema found for $ref '#{uri}'"


