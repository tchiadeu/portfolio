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
  end

  def create
    @bill = Bill.new(bill_params)
    @bill.admin = current_admin
    @bill.emission_date = Date.today
    @bill.due_date = Date.today + 30
    @bill.month = Date.today.strftime('%B')
    @bill.year = Date.today.year
    @bill.number = Bill.where(year: @bill.year).count + 1
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

  def edit
    @bill = Bill.find(params[:id])
  end

  def update
    @bill = Bill.find(params[:id])
    @bill.update(bill_params)
  end

  def destroy
    @bill = Bill.find(params[:id])
    @bill.destroy
  end

  private

  def bill_params
    params.require(:bill).permit(
      :number, :quantity, :unity, :payed, :total_amount, :unit_price, :year, :emission_date, :due_date, :month,
      client_attributes: %i[name address post_code city siret_number tva_number email phone_number]
    )
  end
end
