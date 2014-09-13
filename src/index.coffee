lazy_require = (path) -> get: (-> require( path )), enumerable: true

Object.defineProperties module.exports,
  draft3: lazy_require "./draft3"
  draft4: lazy_require "./draft4"

