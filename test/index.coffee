Testify = require "testify"
shell = require "shelljs"

cmd = "node_modules/.bin/nserver -p 5725 -d test/JSON-Schema-Test-Suite/remotes"
proc = shell.exec cmd, (code, output) ->

require "./draft3/unit"
require "./draft3"

require "./draft4/unit"
require "./draft4"

Testify.once "done", ->
  console.log "Shutting down the 'remotes' test server"
  proc.kill("SIGTERM")

