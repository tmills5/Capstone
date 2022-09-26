class NewslettersController < ApplicationController

    def index
        newsletters = Newsletter.all
        render json: newsletters
    end

    def create
        newsletter = Newsletter.create!(newsletter_params)
        render json: newsletter, status: :created
    end

    private

    def newsletter_params
        params.permit(:first_name, :last_name, :email)
    end


end
