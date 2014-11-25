shell = require "shelljs"

module.exports =
  exec: (cmd) ->
    console.log cmd
    shell.exec cmd


