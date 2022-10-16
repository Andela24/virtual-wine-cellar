class BottlesController < ApplicationController

    def index
        bottles = Bottle.all
        render json: bottles, status: :ok

    end

    def show
        bottle = find_bottle
        render json: bottle, status: :ok
    end

    def create
        bottle = Bottle.create!(bottle_params)
        render json: bottle, status: :created
    end


    def destroy
        bottle = find_bottle
        bottle.destroy
        head :no_content
    end
    private 

    def find_bottle 
        Bottle.find(params[:id])
    end

    def bottle_params 
        params.permit(:description, :winery_id, :user_id)
    end
end
end
