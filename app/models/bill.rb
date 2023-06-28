class Bill < ApplicationRecord
  belongs_to :client
  belongs_to :admin, through: :client

  validates :client, presence: true
  validates :unity, presence: true
  validates :quantity, presence: true
end
