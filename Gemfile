# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.4'

gem 'rails', '~> 6.1.7', '>= 6.1.7.7'

gem 'puma', '~> 5.0'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'redis', '~> 4.0'
gem 'bcrypt', '~> 3.1.7'

gem 'image_processing', '~> 1.2'

gem 'bootsnap', '>= 1.4.4', require: false

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'faker'
end

group :development do
  gem 'web-console', '>= 4.1.0'
  gem 'graphiql-rails'
  gem 'listen', '~> 3.3'
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'mailcatcher'
  gem 'rubocop'
  gem 'rubocop-rails'
  gem 'spring'
end

group :test do
  gem 'capybara', '>= 3.26'
  gem 'database_cleaner'
  gem 'selenium-webdriver', '>= 4.0.0.rc1'
  gem 'shoulda-matchers', '~> 5.0'
  gem 'webdrivers'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'factory_bot_rails'
gem 'graphql', '~> 2.3'
gem 'jwt'
gem 'material-design-rails'
gem 'pg', '~> 1.5'
gem 'sidekiq', '~> 7.2'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

gem 'pundit', '~> 2.3'

gem 'apollo_upload_server', '2.1'

gem 'omniauth'
gem 'omniauth-google-oauth2'
gem 'omniauth-rails_csrf_protection'
gem 'rack-cors', require: 'rack/cors'
gem 'twilio-ruby'

gem 'dotenv-rails'
gem 'letter_opener'
gem 'letter_opener_web'
gem 'mail'
