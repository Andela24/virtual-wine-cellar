class User < ApplicationRecord
    has_secure_password

    has_many :bottles
    has_many :wineries, -> { distinct }, through: :bottles


    validates :username, presence: true, uniqueness: true

    validates :password, presence: true
end
