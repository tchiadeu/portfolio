class Admin < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :clients
  has_many :bills, through: :clients

  validates :email, presence: true, uniqueness: true, inclusion: { in: ['contact@kevintchiadeu.com'], message: "L'email n'est pas valide" }
end
