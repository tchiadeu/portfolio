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
    @bill = Bill.new(bill_params)
    @bill.admin = current_admin
    @bill.month = Date.today.month
    @bill.year = Date.today.year
    if Bill.where(year: @bill.year) < 10
      @bill.number = "0#{Bill.where(year: @bill.year).count + 1}"
    else
      @bill.number = (Bill.where(year: @bill.year).count + 1).to_s
    end
    @bill.emission_date = Date.today
    @bill.due_date = Date.today + 30

    items = []
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
      items << item if item.name.present?
    end
    @bill.items = items

    # item_params = params[:bill][:items_attributes]
    # if item_params.present?
    #   item_params.each do |item_param|
    #     item_param[:total_price] = item_param[:quantity].to_f * item_param[:unit_price].to_f
    #     @bill.items.build!(item_param)
    #   end
    # end

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
end
