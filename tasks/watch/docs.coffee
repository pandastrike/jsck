fs = require "fs"
{exec} = require "../helpers"

fs.watchFile "doc/README.pfm.md", (curr, prev) ->
  exec "pfm doc/README.pfm.md -o README.md"


