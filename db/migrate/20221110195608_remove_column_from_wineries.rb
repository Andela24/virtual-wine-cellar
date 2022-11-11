class RemoveColumnFromWineries < ActiveRecord::Migration[6.1]
  def change
    remove_column :wineries, :location
  end
end
