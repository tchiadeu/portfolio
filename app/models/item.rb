class Item < ApplicationRecord
  UNITY = %w[heures jours].freeze

  belongs_to :bill

  validates :unity, presence: true, inclusion: { in: UNITY }
  validates :quantity, presence: true
end
