# -*- encoding: utf-8 -*-
# stub: sinatra-index 0.0.2 ruby lib

Gem::Specification.new do |s|
  s.name = "sinatra-index"
  s.version = "0.0.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Eli Fox-Epstein"]
  s.date = "2011-01-11"
  s.description = "Provides indices for public"
  s.email = ["eli@redhyphen.com"]
  s.homepage = "http://github.com/elitheeli/sinatra-index"
  s.rubyforge_project = "sinatra-index"
  s.rubygems_version = "2.4.8"
  s.summary = "Provides indices for public"

  s.installed_by_version = "2.4.8" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<sinatra>, [">= 0"])
    else
      s.add_dependency(%q<sinatra>, [">= 0"])
    end
  else
    s.add_dependency(%q<sinatra>, [">= 0"])
  end
end
