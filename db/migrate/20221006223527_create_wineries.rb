class CreateWineries < ActiveRecord::Migration[6.1]
  def change
    create_table :wineries do |t|
      t.string :name
      t.integer :bottle_id

      t.timestamps
    end
  end
end
