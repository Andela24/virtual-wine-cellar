class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :bottles, :brand
    remove_column :wineries, :bottle_id
  end
end
