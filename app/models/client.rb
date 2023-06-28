class Client < ApplicationRecord
  has_many :bills
  belongs_to :admin

  validates :name, presence: true
end
