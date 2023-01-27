class User < ApplicationRecord
    has_secure_password



    has_many :comments, dependent: :destroy
    has_many :breweries, through: :comments

    
    validates :email, presence: true, email: true
    validates :username, presence: true

    # manually encrypt password for seeds.rb
    def User.digest(string)
        cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST : BCrypt::Engine.cost
        BCrypt::Password.create(string, cost: cost)
    end
end