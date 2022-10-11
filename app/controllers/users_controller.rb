class UsersController < ApplicationController
  # signup - create account and log in user
  def create
    user = User.create(user_params)
    # byebug
    if user.valid?
      
      # logs in user
      session[:user_id] = user.id # remembering who our user is
      render json: user, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def get_current_user
    if logged_in?
      render json: current_user, status: :ok
    else
      render json: { errors: ["There is currently no user logged in."] }, status: :bad_request
    end
  end

  private
    def user_params
      params.permit(:username, :password)
    end
end