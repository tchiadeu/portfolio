class BillsController < ApplicationController
  before_action :authenticate_admin!

  def show
    @bill = Bill.find(params[:id])
    respond_to do |format|
      format.html
      format.pdf do
        render pdf: "F-#{@bill.year}-#{@bill.number}",
               template: 'bills/show',
               formats: [:html],
               encoding: 'utf8'
      end
    end
  end

  def new
    @bill = Bill.new
    @bill.build_client
    @bill.items.build
  end

  def create
    build_bill
    build_client
    build_items
    @bill.total_amount = @bill.items.sum(:total_price)
    if @bill.save
      redirect_to dashboard_path
    else
      render :new, status: :unprocessable_entity
    end
  end

  # def edit
  #   @bill = Bill.find(params[:id])
  # end

  # def update
  #   @bill = Bill.find(params[:id])
  #   @bill.update(bill_params)
  # end

  # def destroy
  #   @bill = Bill.find(params[:id])
  #   @bill.destroy
  # end

  private

  def bill_params
    params.require(:bill).permit(
      :number, :payed, :total_amount, :year, :emission_date, :due_date, :month,
      client_attributes: %i[name address post_code city siret_number tva_number email phone_number],
      items_attributes: %i[name description unity quantity unit_price total_price]
    )
  end

  def current_year_amount
    Bill.where(year: @bill.year, admin: current_admin).sum(:total_amount)
  end

  def build_client
    client = Client.new(
      name: params[:bill][:client_attributes][:name],
      address: params[:bill][:client_attributes][:address],
      post_code: params[:bill][:client_attributes][:post_code],
      city: params[:bill][:client_attributes][:city],
      siret_number: params[:bill][:client_attributes][:siret_number],
      tva_number: params[:bill][:client_attributes][:tva_number],
      email: params[:bill][:client_attributes][:email],
      phone_number: params[:bill][:client_attributes][:phone_number]
    )
    client.admin = current_admin
    client.save
    @bill.client = client
  end

  def build_bill
    @bill = Bill.new(bill_params)
    @bill.admin = current_admin
    @bill.month = Date.today.month
    @bill.year = Date.today.year
    Bill.where(year: @bill.year).count < 9 ? @bill.number = "0#{Bill.where(year: @bill.year).count + 1}" : @bill.number = "#{Bill.where(year: @bill.year).count + 1}"
    @bill.emission_date = Date.today
    @bill.due_date = Date.today + 30
    current_year_amount > 32_000 ? @bill.total_amount = @bill.items.sum(:total_price) * 1.2 : @bill.total_amount = @bill.items.sum(:total_price)
  end

  def build_items
    10.times do |i|
      item_params = params[:bill][:item][i.to_s]
      item = Item.new(
        name: item_params[:name],
        description: item_params[:description],
        unity: item_params[:unity],
        quantity: item_params[:quantity],
        unit_price: item_params[:unit_price]
      )
      item.total_price = item.quantity.to_f * item.unit_price.to_f
      @bill.items << item if item.name.present?
    end
  end
end
