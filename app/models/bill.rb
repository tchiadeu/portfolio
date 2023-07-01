class Bill < ApplicationRecord
  UNITY = %w[heures jours].freeze

  belongs_to :client
  belongs_to :admin

  validates :client, presence: true
  validates :unity, presence: true, inclusion: { in: UNITY }
  validates :quantity, presence: true, numericality: { only_integer: false }

  accepts_nested_attributes_for :client
end
