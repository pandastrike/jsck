module.exports =
  
  escape: (string) ->
    string
      .replace(/~0/g, "~")
      .replace(/~1/g, "/")
      .replace(/%25/g, "%")

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

