require "starter/tasks/npm"
require "starter/tasks/git"

coffee = "node_modules/.bin/coffee"

directory "lib"

task "build" => %w[ lib ] do
  sh "#{coffee} --compile --bare --output lib/ src/"
end

task "test" => %w[ test:draft3 ]

task "test:draft3" => %w[ test/JSON-Schema-Test-Suite ] do
  sh "#{coffee} test/draft3_test.coffee"
end


