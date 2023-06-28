Rails.application.routes.draw do
  devise_for :admins
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: 'pages#home'
  get 'dashboard', to: 'pages#dashboard'
  get 'about', to: 'pages#about'
  resources 'bill'
  resources 'client'
end
