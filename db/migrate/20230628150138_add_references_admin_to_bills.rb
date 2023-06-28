class AddReferencesAdminToBills < ActiveRecord::Migration[7.0]
  def change
    add_reference :bills, :admin, null: false, foreign_key: true
  end
end
