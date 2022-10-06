class CreateBottles < ActiveRecord::Migration[6.1]
  def change
    create_table :bottles do |t|
      t.string :title
      t.string :brand
      t.string :type
      t.string :grape_variety
      t.integer :vintage

      t.timestamps
    end
  end
end
