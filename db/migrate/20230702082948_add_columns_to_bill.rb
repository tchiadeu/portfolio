class AddColumnsToBill < ActiveRecord::Migration[7.0]
  def change
    add_column :bills, :emission_date, :date
    add_column :bills, :due_date, :date
    add_column :bills, :month, :string
  end
end
