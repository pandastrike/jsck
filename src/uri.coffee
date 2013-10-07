is_absolute = (string) ->
  /^[\w\d+.-]+:/.test(string)

is_url = (string) ->
  /^[\w\d+.-]+:\/\//.test(string)

resolve = (scope, uri) ->
  if is_absolute(uri)
    uri
  else
    scope = scope.replace /#$/, ""
    if uri.indexOf("#") == 0
      [main, _frag] = scope.split("#")
      main + uri
    else
      if is_url(scope) || scope.indexOf("/") != -1
        scope.replace /\/[^/]+$/, "/#{uri}"
      else
        "#{scope}/#{uri}"

module.exports = {is_absolute, is_url, resolve}
