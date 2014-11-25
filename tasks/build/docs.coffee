{exec} = require "../helpers"

# pfm is a rubygem for converting Panda Flavored Markdown into
# GitHub Flavored Markdown.
#   gem install pfm
exec "pfm doc/README.template.md -o README.md"
