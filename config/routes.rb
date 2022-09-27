Rails.application.routes.draw do
  resources :users
  resources :newsletters
  resources :comments
  
  post '/brewery_search', to: 'breweries#brewery_search'

  resources :breweries, only: [:show, :index] do
    resources :comments, only: [:show, :index]
  end
  


#logging in and logging out
  post '/login', to: "sessions#login"
  delete '/logout', to: 'sessions#destroy'

  get '/signup', to: 'users#create'

# authenticate user initially
  get '/authenticated_user', to: 'users#show'




  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
