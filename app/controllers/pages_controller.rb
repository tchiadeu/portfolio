class PagesController < ApplicationController
  def home
    @age = ((Date.today - Date.new(1992, 5, 6)).to_i / 365.25).to_i
  end

  def contacter
  end

  def contact
  end
end
