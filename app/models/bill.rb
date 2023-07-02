class Bill < ApplicationRecord
  belongs_to :client
  belongs_to :admin
  has_many :items, dependent: :destroy

  accepts_nested_attributes_for :client
  accepts_nested_attributes_for :items
end
