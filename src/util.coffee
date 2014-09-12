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
        pointer: "#{@pointer}/#{token}"

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
        pointer: "#{@pointer}/#{token}"
        scope: @scope

    sibling: (token) ->
      pointer = @pointer.replace(/\/.*$/, "/#{token}")
      new Context
        pointer: pointer
        scope: @scope

