fs = require "fs"
{docs, build_docs} = require "../helpers"

for source, _dest of docs
  do (source) ->
    fs.watchFile source, (curr, prev) ->
      build_docs(source)


