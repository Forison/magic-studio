# frozen_string_literal: true

Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql' if Rails.env.development?
  post '/graphql', to: 'graphql#execute'
  root 'magic_studios#index'
  match '*path', to: 'magic_studios#index', via: :all, constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }

  # For Omniauth authentication
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/auth/failure', to: redirect('/log_in')

  # mailer preview
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?
end
