module.exports =
  
  escape: (string) ->
    string
      .replace(/~0/g, "~")
      .replace(/~1/g, "/")
      .replace(/%25/g, "%")

  # Used during document validation.  Maintains a list of errors and the
  # JSON pointer for the section of the document.
  Runtime: class Runtime
    constructor: ({@errors, @pointer, @error_pointer, @tested_item}) ->
      @items_tested = 0
      @tested_item ?= => @items_tested++
      @error_pointer ?= @pointer

    child: (token) ->
      new @constructor
        errors: @errors
        pointer: "#{@pointer}/#{token.toString()}"
        error_pointer: "#{@error_pointer}/#{token.toString()}"
        tested_item: @tested_item

    path: ->
      @pointer.slice(2).replace(/\//g, ".")

    error: (context, value, options={}) ->
      e =
        schema:
          pointer: context.pointer
          attribute: context._attribute
          definition: context.definition
        document:
          pointer: @error_pointer
          path: @path()
          value: value
      if options.description?
        e.description = options.description
      @errors.push e


  # Maintains the URI scope and JSON pointer during traversal
  # of a schema.
  Context: class Context

    constructor: ({@pointer, @scope, @_attribute}) ->

    attribute: (name) ->
      new Context
        pointer: "#{@pointer}/#{name.toString()}"
        scope: @scope
        _attribute: name

    child: (token) ->
      new Context
        pointer: "#{@pointer}/#{token.toString()}"
        scope: @scope
        _attribute: @_attribute

    sibling: (token) ->
      pointer = @pointer.replace(/\/.*$/, "/#{token.toString()}")
      new Context
        pointer: pointer
        scope: @scope

