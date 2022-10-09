class BottleSerializer < ActiveModel::Serializer
  attributes :id, :title, :wine_type, :grape_variety, :vintage

  belongs_to :winery
  has_many :bottle_prices
  has_many :users, through: :bottle_prices

  # accepts_nested_attributes_for :bottle_prices
end
