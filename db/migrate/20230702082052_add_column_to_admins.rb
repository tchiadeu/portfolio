class AddColumnToAdmins < ActiveRecord::Migration[7.0]
  def change
    add_column :admins, :name, :string
    add_column :admins, :siret_number, :integer
    add_column :admins, :tva_number, :string
    add_column :admins, :address, :string
    add_column :admins, :post_code, :string
    add_column :admins, :city, :string
  end
end
