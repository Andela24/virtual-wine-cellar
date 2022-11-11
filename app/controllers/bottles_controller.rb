class BottlesController < ApplicationController
    # before_action :set_bottle, only: [:show, :update, :destroy]
    skip_before_action :authenticate_user
   
# get/ bottles

    def index
        @bottles = Bottle.all
        render json: @bottles, status: :ok

    end

    # GET/bottles:id
    def show
        @bottle = Bottle.find(params[:id])
        render json: @bottle, status: :ok
    end

    def create
        # binding.pry
        # @user=User.find(session[:user_id])
        # if @user
        # @bottle = Bottle.create!(bottle_params)
        # render json: @bottle, status: :created
        # else
        #     render json: { error: 'User not found'}, status: 404
        # end
        @bottle=Bottle.create(bottle_params)
        render json: @bottle, status: 201
    end


    def destroy
        @bottle = Bottle.find(params[:id])
        @bottle.destroy
    end

    private 

    def bottle_params 
        params.permit(:title, :wine_type, :grape_variety, :vintage)
    end

    # def set_bottle 
    #     @bottle = Bottle.find(params[:id])
    #  end
end

