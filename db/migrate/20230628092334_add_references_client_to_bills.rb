class AddReferencesClientToBills < ActiveRecord::Migration[7.0]
  def change
    add_reference :bills, :client, null: false, foreign_key: true
  end
end
