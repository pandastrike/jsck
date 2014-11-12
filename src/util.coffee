module.exports =
  
  escape: (string) ->
    string
      .replace(/~0/g, "~")
      .replace(/~1/g, "/")
      .replace(/%25/g, "%")

  # Used during document validation.  Maintains a list of errors and the
  # JSON pointer for the section of the document.
  Runtime: class Runtime
    constructor: ({@errors, @pointer}) ->

    child: (token) ->
      new @constructor
        errors: @errors
        pointer: "#{@pointer}/#{token.toString()}"

    error: (context) ->
      @errors.push
        document:
          pointer: @pointer
        schema:
          pointer: context.pointer


  # Maintains the URI scope and JSON pointer during traversal
  # of a schema.
  Context: class Context

    constructor: ({@pointer, @scope}) ->

    child: (token) ->
      new Context
        pointer: "#{@pointer}/#{token.toString()}"
        scope: @scope

    sibling: (token) ->
      pointer = @pointer.replace(/\/.*$/, "/#{token.toString()}")
      new Context
        pointer: pointer
        scope: @scope

