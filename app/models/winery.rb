class Winery < ApplicationRecord
    has_many :bottles
    has_many :users, through: :bottles
end
