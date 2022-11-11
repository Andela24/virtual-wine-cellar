class BottleSerializer < ActiveModel::Serializer
  attributes :id, :title, :wine_type, :grape_variety, :vintage

  belongs_to :user
  belongs_to :winery
  # has_one :winery
  # def winery 
  #   {name:object.winery.name}
  # end

  # def username
  #   object.user.username if object.user
  # end
end
