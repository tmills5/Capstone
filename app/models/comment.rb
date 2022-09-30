class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :brewery

    # def commenter
    #     user["username"]
    # end
    # def commenter_avatar
    #     # byebug
    #     user["avatar"]
    # end

    # def commented_brewery
    #     brewery[:name]
    # end



    # def brewery_name
    # byebug
    #     brewery.name
    # end
end
