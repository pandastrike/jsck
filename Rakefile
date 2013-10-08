require "starter/tasks/npm"
require "starter/tasks/git"

coffee = "node_modules/.bin/coffee"

directory "lib"

task "build" => %w[ lib ] do
  sh "#{coffee} --compile --bare --output lib/ src/"
end

task "test" => %w[ test:draft3 ] do
  sh "#{coffee} test/unit/references.coffee"
  sh "#{coffee} test/unit/uri_test.coffee"
end

task "test:draft3" => %w[ update ] do
  sh "#{coffee} test/draft3_test.coffee"
end

task "update" do
  sh "git submodule init"
  sh "git submodule update"
end

