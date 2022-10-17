Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!


resources :wineries
resources :bottles, only: [:index, :show, :new, :create, :edit, :update]

post '/login', to: 'sessions#create'
post '/signup', to: 'users#create'
get '/me', to: 'users#show'
delete '/logout', to: 'sessions#destroy'




  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
