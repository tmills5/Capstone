class Comment < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :brewery, optional: true


end
