class BreweriesController < ApplicationController
    wrap_parameters format: []
    
    def index
        breweries = Brewery.all
        render json: breweries
    end

    def show
        brewery = find_brewery
        if brewery
        render json: brewery
        else
        render json: {error: "Brewery Not Found"}, status: :not_found
        end
    end

    def create
        brewery = Brewery.create!(brewery_params)
        render json: brewery, status: :created
    end

    def update
        brewery = find_brewery
        if brewery
            brewery.update!(brewery_params)
            render json: brewery, status: :accepted
        else
            render json: {error: "Brewery Not Found"}, status: :not_found
        end
    end

    def destroy
        brewery = find_brewery
        if brewery
            brewery.destroy
            head :no_content
        else
            render json: {error: "Brewery Not Found"}, status: :not_found
        end
    end
    
private

    def brewery_params
        params.permit(:name, :brewery_type, :description, :street, :city, :state, :postal_code, :phone, :website_url, :image_url)
    end

    def find_brewery
        Brewery.find(params[:id])
    end

end
