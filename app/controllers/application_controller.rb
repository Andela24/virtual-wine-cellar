class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  before_action :authorize

  def login_user
    session[:user_id] = @user.id
  end

  def logged_in?
    !!session[:user_id]
  end

  private 

  def authorize
  @current_user = User.find_by_id(session[:user_id])
  render json: { error: ["Not authorized"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end

