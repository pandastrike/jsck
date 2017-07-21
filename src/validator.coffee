URI = require "./uri"

{escape, Runtime, Context} = require "./util"

# Schemas should always be JSON stringifiable, so this is a simple
# method for obtaining a deep clone of one.  This function only gets
# used at schema-compilation time, so there are no performance
# implications unless you are constantly compiling new schemas.
clone = (value) ->
  JSON.parse(JSON.stringify(value))

DEFINITIONS =
  "http://json-schema.org/draft-03/schema#":
    require "../schemas/draft-03/schema.json"
  "http://json-schema.org/draft-04/schema#":
    require "../schemas/draft-04/schema.json"

module.exports = ({schema_uri, mixins}) ->

  SCHEMA_URI = schema_uri

  class Validator

    @modifiers:
      patternProperties: [ "additionalProperties" ]

      additionalProperties: [
        "properties"
        "patternProperties"
      ]

      items: [ "additionalItems" ]

      minimum: [ "exclusiveMinimum" ]
      maximum: [ "exclusiveMaximum" ]


    common_modules =
      "type": require "./common/type"
      "numeric": require "./common/numeric"
      "comparison": require "./common/comparison"
      "arrays": require "./common/arrays"
      "objects": require "./common/objects"
      "strings": require "./common/strings"

    common = for name of common_modules
      mixin = common_modules[name]
      for name, method of mixin
        Validator.prototype[name] = method

    for mixin in mixins
      for name, method of mixin
        Validator.prototype[name] = method


    constructor: (schemas...) ->
      @uris = {}
      @media_types = {}
      @unresolved = {}
      @options = {}

      @add(DEFINITIONS[SCHEMA_URI])
      for schema in schemas
        if schema["$schema"]? && schema["$schema"] != SCHEMA_URI
          throw "This validator doesn't support this JSON schema."
        @add(schema)

    set_options: (args) ->
      @options = args
      return this

    add: (schema) ->
      # Clone the schema to prevent any user changes from affecting JSCK.
      schema = clone(schema)

      if schema.id
        # Make sure the schema id always ends with "#"
        schema.id = schema.id.replace /#?$/, "#"

      # The context keeps track of where we are in the schema while
      # we traverse it for compilation.
      context = new Context
        pointer: schema.id || "#"
        scope: schema.id || "#"

      @compile_references context, schema
      @compile(context, schema)

    validate: (data) ->
      @validator("#").validate(data)

    validator: (arg) ->
      if (schema = @find arg)?
        validate: (data) =>
          errors = []
          runtime = new Runtime {errors, pointer: "#"}
          schema._test(data, runtime)
          if errors.length > 0
            for error in errors
              [base..., attribute] = error.schema.pointer.split("/")
              pointer = base.join("/")
              error.schema.definition ?= @resolve_uri(pointer)?[attribute]
              if error.document.value is undefined
                delete error.document.value

          valid = runtime.errors.length == 0
          {valid, errors}
        toJSON: (args...) ->
          schema
      else
        throw new Error "No schema found for '#{JSON.stringify(arg)}'"


    # Find a registered schema.
    #
    # Takes either a URI string or an options object.
    # Valid options:
    # * uri
    # * mediaType
    find: (arg) ->
      if @test_type "string", arg
        uri = escape(arg)
        #if /required/.test uri
          #for u, def of @uris when /required/.test u
            #console.error u
        @uris[uri]
      else if (uri = arg.uri)?
        uri = escape(uri)
        @uris[uri]
      else if (media_type = arg.mediaType)?
        @media_types[media_type]
      else
        null


    resolve_uri: (uri, scope) ->
      if (schema = @find(uri))?
        if schema.$ref
          @resolve_uri URI.resolve(scope, schema.$ref)
        else
          schema


    register: (uri, schema) ->
      @uris[uri] = schema
      # TODO: enforce uniqueness of types
      if (media_type = schema.mediaType)?
        if media_type != "application/json"
          @media_types[media_type] = schema


    compile_references: (context, schema) ->
      # Make an initial pass over the schema looking for $ref fields,
      # recording their targets for use in actual compilation.
      @schema_references(context, schema)

      # We try a second time to resolve $ref values, because a schema may have
      # been defined after we initially tried to resolve a $ref.
      for ref, {scope, uri} of @unresolved
        if (found_schema = @resolve_uri(uri, scope))?
          delete @unresolved[ref]
          @register ref, found_schema
      if Object.keys(@unresolved).length > 0
        pointers = (uri for key, {uri} of @unresolved)
        throw new Error "Unresolvable $ref values: #{JSON.stringify pointers}"


    schema_references: (context, schema) ->
      if !@test_type "object", schema
        throw new Error "Schema must be an object - #{context.pointer}"

      {scope, pointer} = context
      @register pointer, schema

      # This is one of the two cases where we pay attention to an "id"
      # attribute. The other is top-level id declaration, serving to identify
      # the entire schema.
      #
      # Here, we treat bare fragment identifiers (e.g. "#user") as aliases.
      if schema.id && schema.id.indexOf("#") == 0
        uri = URI.resolve scope, schema.id
        schema.id = uri
        @register uri, schema

      for attribute, definition of schema
        if "$ref" == attribute
          @resolve_reference(context, schema, definition)
        else
          new_context = context.child(attribute)
          if "properties" == attribute
            @properties_references new_context, definition
          else if "items" == attribute
            @items_references new_context, definition
          else if "definitions" == attribute
            @definitions_references new_context, definition
          else if @test_type "object", definition
            @schema_references new_context, definition
          else if attribute in ["allOf", "anyOf", "not"]
            for s, i in definition
              @schema_references new_context.child(i), s


    resolve_reference: (context, schema, definition) ->
      {scope, pointer} = context
      # turn relative refs into absolute URIs
      uri = URI.resolve(scope, definition)

      # When the URI of a $ref is a substring of the present context's URI,
      # we're in a recursive reference situation.
      # Ignore recursive references during this stage.
      if pointer.indexOf(uri + "/") != 0
        if (found_schema = @resolve_uri(uri, scope))?
          delete schema.$ref
          for k, v of found_schema
            schema[k] = v
          @schema_references context, schema
        else
          # Store the unresolvable reference so we can try to resolve
          # it again after having traversed the all schemas.
          @unresolved[pointer] = {scope, uri}


    properties_references: (context, properties) ->
      if !@test_type "object", properties
        throw new Error "Properties must be an object - #{context.pointer}"

      for property, schema of properties
        @schema_references context.child(property), schema

    items_references: (context, definition) ->
      if @test_type "array", definition
        for def, i in definition
          @schema_references context.child(i), def
      else
        @schema_references context, definition

    definitions_references: (context, object) ->
      if !@test_type "object", object
        throw new Error "Value of 'definitions' must be an object - #{context.pointer}"

      for name, schema of object
        @schema_references context.child(name), schema


    compile: (context, schema) ->
      {scope, pointer} = context
      tests = []

      # When the schema contains the $ref attribute, locate the referenced
      # schema and use in place of the present schema.
      if (uri = schema.$ref)?
        if @uris[uri]
          return (args...) =>
            @uris[uri]._test(args...)
        uri = URI.resolve(scope, uri)
        if pointer.indexOf(uri) == 0
          # When the URI of a $ref is a substring of the present context's URI,
          # we're in a recursive reference situation.
          return @recursive_test(schema, context)
        schema = @find(uri)
        if !schema
          throw new Error "No schema found for $ref '#{uri}'"

      for key, definition of schema when key != "_test"
        # Create a child context to track our progress into a new attribute.
        new_context = context.attribute(key)

        if @[key]?
          test = @compile_attribute(new_context, key, schema, definition)
          tests.push(test) if test
        else
          # If the key doesn't correspond to a known attribute name, treat
          # the object as a container of definitions.
          @compile_definitions(new_context, definition)

      test_function = (data, runtime) ->
        return null if typeof(data) == "undefined"
        runtime.tested_item()
        for test in tests
          test(data, runtime)
        null

      # Record the test function for use by such things as @recursive_test.
      @find(pointer)?._test = test_function
      # Also record the function for schemas with "alias" ids.
      if schema.id
        uri = URI.resolve scope, schema.id
        @find(uri)?._test = test_function

      return test_function


    compile_attribute: (context, attribute, schema, definition) ->

      # Some validation attributes can be modified by other attributes
      # at the same level.  E.g. minimum is modified by exclusiveMinimum.
      # Here we check the schema for such auxiliary attributes and stow
      # them in the context, so the primary attribute handler can act
      # on them.
      context.modifiers = {}

      if (modifiers = Validator.modifiers[attribute])?
        for key in modifiers
          context.modifiers[key] = schema[key]

      # Call the attribute's handler.
      # The return value will be a function that validates a document.
      # In rare cases, the attribute handler does not return a test
      # function, because some related attribute performs the test.
      if @[attribute]?
        if (test = @[attribute](definition, context))?
          return test


    compile_definitions: (context, object) ->
      if @is_schema(object)
        @compile(context, object)
      else if @test_type "object", object
        for name, definition of object
          @compile_definitions context.child(name), definition


    is_schema: (object) ->
      object.type? || object.$ref? ||
        object.allOf? || object.anyOf? || object.not?

    recursive_test: (schema, {scope, pointer}) ->
      uri = URI.resolve(scope, schema.$ref)
      if (schema = @find uri)?
        (data, runtime) ->
          schema._test(data, runtime)
      else
        throw new Error "No schema found for $ref '#{uri}'"



