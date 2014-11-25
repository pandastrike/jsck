{exec} = require "../helpers"

# pfm is a rubygem for converting Panda Flavored Markdown into
# GitHub Flavored Markdown.
#   gem install pfm
exec "pfm doc/README.pfm.md -o README.md"
