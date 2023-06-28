class Client < ApplicationRecord
  has_many :bills

  validates :name, presence: true
end
