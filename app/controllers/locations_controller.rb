class LocationsController < ApplicationController

  def home
  end

  def new
    @location = Location.new
  end

  def create
    @location = Location.new(location_params)
    @location.save
    if @location.save
      flash[:notice] = "success"
      redirect_to locations_path
    else
      flash[:notice] = "failure"
      render 'new'
    end
  end

  def index
    @locations = Location.all
    @location = Location.new
  end

  def show
  end

  def edit
  end

  def update
  end

  def delete
  end

  def location_params
    params.require(:location).permit(:name, :lonlat, :quadrilatere )
  end
end
