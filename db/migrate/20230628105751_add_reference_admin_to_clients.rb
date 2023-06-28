class AddReferenceAdminToClients < ActiveRecord::Migration[7.0]
  def change
    add_reference :clients, :admin, null: false, foreign_key: true
  end
end
