class Bottle < ApplicationRecord
    # includes 
    belongs_to :user
    belongs_to :winery
  
  
    validates :vintage, length: { is: 4 }
    validates :vintage, :inclusion => 1950..2020
end
