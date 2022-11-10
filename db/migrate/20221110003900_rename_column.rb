class RenameColumn < ActiveRecord::Migration[6.1]
  def change 
    rename_column :bottles, :type, :wine_type
  end
end
