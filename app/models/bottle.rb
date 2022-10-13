class Bottle < ApplicationRecord
    belongs_to :user
    belongs_to :winery
  
    # accepts_nested_attributes_for :wineries
  
    validates :vintage, length: { is: 4 }
    validates :vintage, :inclusion => 1950..2020
end
