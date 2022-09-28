class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :brewery

    def commenter_username
        # byebug 
        user.username
    end

    def commenter_avatar
        user.avatar
    end

    def brewery_name
        brewery.name
    end
end
