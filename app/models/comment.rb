class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :brewery

    def commenter_name
        user.username
    end
end
