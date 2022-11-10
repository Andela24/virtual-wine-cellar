class BottlesController < ApplicationController
    skip_before_action :authorize
    before_action :set_bottle, only: [:show, :update, :destroy]
# get/ bottles

    def index
        @bottles = Bottle.all
        render json: @bottles, status: :ok

    end

    # GET/bottles:id
    def show
        
        render json: @bottle, status: :ok
    end

    def create
        binding.pry
        user=User.find(session[:user_id])
        if user
        @bottle = Bottle.create!(bottle_params)
        render json: @bottle, status: :created

        else
            render json: { error: 'User not found'}, status: 404
        end
    end


    def destroy
        @bottle.destroy
    end

    private 

    def set_bottle 
       @bottle= Bottle.find(params[:id])
    end

    def bottle_params 
        params.permit(:title, :brand, :wine_type, :grape_variety, :vintage, :winery_id)
    end
end

