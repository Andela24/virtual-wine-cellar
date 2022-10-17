class AddLocationToWinery < ActiveRecord::Migration[6.1]
  def change
    add_column :wineries, :location, :string
  end
end
