class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_body, :user_id, :user, :brewery
  # tried commenter, comment_username, user by itself works not sure why


  belongs_to :user
  belongs_to :brewery

end
