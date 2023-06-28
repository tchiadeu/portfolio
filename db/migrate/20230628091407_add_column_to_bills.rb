class AddColumnToBills < ActiveRecord::Migration[7.0]
  def change
    add_column :bills, :unity, :string
    add_column :bills, :quantity, :float
    add_column :bills, :payed, :boolean, default: false
  end
end
