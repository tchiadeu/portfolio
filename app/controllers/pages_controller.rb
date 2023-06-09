class PagesController < ApplicationController
  before_action :authenticate_admin!, only: [:dashboard]

  def home
    @age = ((Date.today - Date.new(1992, 5, 6)).to_i / 365.25).to_i
  end

  def dashboard
    @clients = Client.where(admin: current_admin)
    @bills = Bill.where(admin: current_admin)
  end

  def about
  end
end
