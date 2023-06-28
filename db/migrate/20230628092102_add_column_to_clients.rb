class AddColumnToClients < ActiveRecord::Migration[7.0]
  def change
    add_column :clients, :phone_number, :integer
    add_column :clients, :email, :string
  end
end
