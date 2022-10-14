class UsersController < ApplicationController
skip_before_action :authorize, only: :create


  def show 
    #get current user

  end
  # signup - create account and log in user
  def create
    user = User.create(user_params)
    
    if user.valid?
      # logs in user
      session[:user_id] = user.id # remembering who our user is
      render json: user, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def get_current_user
    render json: @current_user, status: :ok
  end

  private
    def user_params
      params.permit(:username, :password)
    end
end