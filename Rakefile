require "starter/tasks/npm"
require "starter/tasks/git"

task "test" => %w[ test:draft3 ]

task "test:draft3" => %w[ test/suite ] do
  sh "coffee test/draft3_test.coffee"
end

file "test/suite.tgz" do |t|
  Dir.chdir("test") do
    sh "wget https://github.com/json-schema/JSON-Schema-Test-Suite/archive/1.1.1.tar.gz -O suite.tgz"
  end
end

file "test/suite" => %w[ test/suite.tgz ] do
  Dir.chdir("test") do
    sh "tar xzf suite.tgz"
    mv "JSON-Schema-Test-Suite-1.1.1", "suite"
  end
end


