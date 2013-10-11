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

task "run:remotes" do
  system "node_modules/.bin/nserver -p 5725 -d test/JSON-Schema-Test-Suite/remotes"
end


task "doc" => %w[ doc:readme ]

task "doc:readme"  do |t|
  File.open("README.md", "w") do |f|
    f.puts process_doc("doc/README.template.md")
  end
end

def process_doc(path)
  regex = %r{^```([^\s#]+)(#L(\S+))?\s*```$}
  out = []
  base_path = File.dirname(path)
  string = File.open(path, "r") do |f|

    f.each_line do |line|

      if md = regex.match(line)
        _full, source_path, badline, line_spec = md.to_a
        if line_spec
          start, stop = line_spec.split("-").map { |s| s.to_i}
        else
          start = 1
        end

        source_path = File.expand_path("#{base_path}/#{source_path}").strip
        extension = File.extname(source_path)
        out << "```#{extension}\n\n"

        embed = []
        File.open(source_path, "r") do |source|
          source.each_line do |line|
            embed << line
          end
        end
        start -= 1
        if stop
          stop -=1
        else
          stop = embed.size - 1
        end
        out << embed.slice(start..stop).join()
        out << "```\n"
      else
        out << line
      end
    end

  end

  out.join()
end


