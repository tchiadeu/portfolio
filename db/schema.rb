# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_02_091410) do
  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "name"
    t.integer "siret_number"
    t.string "tva_number"
    t.string "address"
    t.string "post_code"
    t.string "city"
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "bills", force: :cascade do |t|
    t.integer "number"
    t.float "total_amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "payed", default: false
    t.integer "client_id", null: false
    t.integer "admin_id", null: false
    t.integer "year"
    t.date "emission_date"
    t.date "due_date"
    t.string "month"
    t.index ["admin_id"], name: "index_bills_on_admin_id"
    t.index ["client_id"], name: "index_bills_on_client_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "post_code"
    t.string "city"
    t.integer "siret_number"
    t.string "tva_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "phone_number"
    t.string "email"
    t.integer "admin_id", null: false
    t.index ["admin_id"], name: "index_clients_on_admin_id"
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "unity"
    t.float "quantity"
    t.float "unit_price"
    t.float "total_price"
    t.integer "bill_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["bill_id"], name: "index_items_on_bill_id"
  end

  add_foreign_key "bills", "admins"
  add_foreign_key "bills", "clients"
  add_foreign_key "clients", "admins"
  add_foreign_key "items", "bills"
end
