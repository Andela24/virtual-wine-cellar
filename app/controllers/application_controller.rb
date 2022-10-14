class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize

  def login_user
    session[:user_id] = @user.id
  end

  def logged_in?
    !!session[:user_id]
  end

  private 

  def authorize
  @current_user= User.find_by_id(session[:user_id])
  render json: { error: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

end

