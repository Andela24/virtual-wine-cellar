class AddForeignKeys < ActiveRecord::Migration[6.1]
  def change
    add_column :bottles, :user_id, :integer
    add_column :bottles, :winery_id, :integer 
  end
end
