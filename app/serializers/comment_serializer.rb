class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_body, :user_id, :commenter_username, :commenter_avatar, :brewery_name

  belongs_to :user
  belongs_to :brewery
end
