class RemoveColumnsToBills < ActiveRecord::Migration[7.0]
  def change
    remove_column :bills, :unity
    remove_column :bills, :quantity
    remove_column :bills, :unit_price
    remove_column :bills, :items_number
  end
end
