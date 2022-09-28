class NewslettersController < ApplicationController

    def index
        newsletters = Newsletter.all
        render json: newsletters
    end

    def create
        newsletter = Newsletter.create!(newsletter_params)
        render json: newsletter, status: :created
    end

    def update
        newsletter = Newsletter.find(params[:id])
        if newsletter
            newsletter.update!(newsletter_params)
            render json: newsletter, status: :accepted
        else
            render json: {error: "Newsletter Not Found"}, status: :not_found
        end
    end

    def destroy
        newsletter = Newsletter.find(params[:id])
        if newsletter
            newsletter.destroy
            head :no_content
        else
            render json: {error: "Newsletter Not Found"}, status: :not_found
        end
    end

    private

    def newsletter_params
        params.permit(:first_name, :last_name, :email)
    end

end
