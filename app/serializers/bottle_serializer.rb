class BottleSerializer < ActiveModel::Serializer
  attributes :id, :title, :wine_type, :grape_variety, :vintage

  belongs_to :winery
  has_many :bottle_prices
  belongs_to :user

end
