class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :first_name, :last_name, :username, :avatar, :is_admin

  has_many :comments, dependent: :destroy
  # has_many :breweries, through: :comments
end
