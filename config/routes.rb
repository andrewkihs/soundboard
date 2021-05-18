Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :likes, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :songs, only: [:show, :create, :destroy, :update, :index] do
      resources :comments, only: [:create]
      resources :likes, only: [:create, :destroy]
    end
  end

end


