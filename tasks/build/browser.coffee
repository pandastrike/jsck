{exec} = require "../helpers"

require "./javascript"

base = "node_modules/.bin/cjsify lib/index.js --no-node --export JSCK"

# https://www.npmjs.com/package/commonjs-everywhere
exec "#{base} -o jsck.js"
exec "#{base} -m -o jsck.min.js"

