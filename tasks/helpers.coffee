shell = require "shelljs"

exec = (cmd) ->
  console.log cmd
  shell.exec cmd

docs =
  "doc/README.pfm.md": "README.md"
  "doc/tests.pfm.md": "doc/tests.md"
  "doc/benchmarks.pfm.md": "doc/benchmarks.md"

module.exports =
  exec: exec
  docs: docs

  build_docs: (name) ->
    # pfm is a rubygem for converting Panda Flavored Markdown into
    # GitHub Flavored Markdown.
    #   gem install pfm

    if name
      destination = docs[name]
      exec "pfm #{name} -o #{destination}"
    else
      for source, destination of docs
        exec "pfm #{source} -o #{destination}"


