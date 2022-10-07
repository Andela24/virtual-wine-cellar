Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

post '/login', to: 'sessions#create'
# delete '/logout' to: 'sessions#destroy'
get '/current-user', to: 'users#get_current_user'
post '/singup', to: 'users#create'
get '/me', to: 'users#show'

resources :wineries
# resources :bottles, only: [:index, :show, :new, :create, :edit, :update]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
