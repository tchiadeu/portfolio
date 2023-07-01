class AddColumnUnitPriceToBills < ActiveRecord::Migration[7.0]
  def change
    add_column :bills, :unit_price, :float
  end
end
