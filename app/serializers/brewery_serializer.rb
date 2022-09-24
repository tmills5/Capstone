class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :brewery_type, :street, :city, :state, :postal_code, :phone, :website_url, :image_url

  # has_many :comments
  # has_many :users
end
