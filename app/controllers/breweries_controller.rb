class BreweriesController < ApplicationController
    wrap_parameters format: []
    
    def index
        breweries = Brewery.all
        render json: breweries
    end

    def show
        brewery = find_brewery
        if brewery
        render json: brewery, include: [:comments]
        else
        render json: {error: "Brewery Not Found"}, status: :not_found
        end
    end

    def brewery_search
        # byebug
        breweries = Brewery.all.select { |brewery| brewery.city.include? params[:breweryQuery]}
        render json: breweries
    end

private

    def find_brewery
        Brewery.find(params[:id])
    end

end
