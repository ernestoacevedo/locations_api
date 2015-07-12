class HomeController < ApplicationController
  def index
    @location = Location.new
  end
end
