class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_body, :user_id, :brewery_id, :commenter_name

  belongs_to :user
  belongs_to :brewery
end
