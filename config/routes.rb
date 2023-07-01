Rails.application.routes.draw do
  devise_for :admins

  root to: 'pages#home'
  get 'dashboard', to: 'pages#dashboard'
  get 'about', to: 'pages#about'

  resources 'bills', only: %i[show new create edit update destroy]
  resources 'clients', only: %i[show new create edit update destroy]
end
