class CreateBottlePrices < ActiveRecord::Migration[6.1]
  def change
    create_table :bottle_prices do |t|
      t.numeric :price

      t.timestamps
    end
  end
end
