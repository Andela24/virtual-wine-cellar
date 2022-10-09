class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :bottle_prices
  has_many :bottles, through: :bottle_prices
end
