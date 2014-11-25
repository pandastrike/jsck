fs = require "fs"
{exec} = require "../helpers"

exec "coffee --compile --watch --bare --output lib/ src/", ->

