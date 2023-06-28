class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:dashboard]

  def home
    @age = ((Date.today - Date.new(1992, 5, 6)).to_i / 365.25).to_i
  end

  def dashboard
    @clients = Client.all
    @bills = Bill.all
  end

  def about
  end
end
