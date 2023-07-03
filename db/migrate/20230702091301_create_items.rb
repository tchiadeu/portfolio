class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :unity
      t.float :quantity
      t.float :unit_price
      t.float :total_price
      t.references :bill, null: false, foreign_key: true

      t.timestamps
    end
  end
end
