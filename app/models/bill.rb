class Bill < ApplicationRecord
  belongs_to :client

  validates :client, presence: true
  validates :unity, presence: true
  validates :quantity, presence: true
end
