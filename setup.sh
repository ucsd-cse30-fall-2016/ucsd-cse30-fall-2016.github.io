#!/usr/bin/env bash

JEKYLL_RUBY_VERSION=2.1.7
JEKYLL_RUBY=ruby-${JEKYLL_RUBY_VERSION}

echo "Installing software needed to run Jekyll locally... "
[[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"

# If needed version not already installed, install it

( rvm list rubies | grep -q ${JEKYLL_RUBY} ) || rvm install ruby-${JEKYLL_RUBY}

rvm use ${JEKYLL_RUBY_VERSION}
gem install bundler
bundle install --path vendor/bundle
echo "Done."
