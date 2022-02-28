Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

root to: 'locations#home'
get 'home', to: 'locations#home'

resources :locations

end
