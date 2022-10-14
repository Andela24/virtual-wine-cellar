class WineriesController < ApplicationController
    before_action :logged_in_user
    before_action :set_winery, only: [:show, :edit, :update]

    def index
        wineries = Winery.all
        render json: wineries, status: :ok
      end
    
      def new
        winery =  Winery.new
      end
    
      def create
        winery = Winery.create(winery_params)
        render json: winery, status: 201
      end
    
    
      def show
        @bottle = Bottle.new
        @user_id = current_user.id
        @winery = Winery.find(params[:id])
        respond_to do |format|
          format.html { render :show }
          format.json { render json: @winery }
        end
      end
    
      def update
        if @winery.update(winery_params)
          redirect_to @winery
        else
          render :edit
        end
      end
    
      private
    
      def set_winery
        @winery = Winery.find(params[:id])
      end
    
      def winery_params
        params.require(:winery).permit(:name)
      end
    end
end
