class AddItemsNumberToBills < ActiveRecord::Migration[7.0]
  def change
    add_column :bills, :items_number, :integer
  end
end
