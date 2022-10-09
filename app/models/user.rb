class User < ApplicationRecord
    has_secure_password

    has_many :bottle_prices
    has_many :bottles, through: :bottle_prices

    validates :username, presence: true, uniqueness: true

    validates :password, presence: true
end
