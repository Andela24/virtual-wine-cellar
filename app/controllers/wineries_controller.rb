class WineriesController < ApplicationController
  skip_before_action :authorize
  before_action :set_winery, only: [:show, :update, :destroy]

  # get / wineries
    def index
        @wineries = Winery.all
        render json: @wineries, status: :ok
      end

      # GET/wineries:id
      def show
        @winery = Winery.find(params[:id])
        render json: @winery, include: :bottles, status: :ok
      end

      # def new
      #   winery =  Winery.new
      # end

     # POST
      def create
        @winery = Winery.create(winery_params)
        render json: @winery, status: 201
      end
    
    
      def update
        winery = find_winery
        winery.update!(winery_params)
        render json: winery, status: :ok
      end
    
      private
    
      def find_winery
        @winery = Winery.find(params[:id])
      end
    
      def winery_params
        params.permit(:name)
      end
    end

