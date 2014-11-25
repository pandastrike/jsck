{exec} = require "../helpers"

exec "mkdir -p lib"
exec "coffee --compile --bare --output lib/ src/"
