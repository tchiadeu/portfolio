class ClientsController < ApplicationController
  def show
    @client = Client.find(params[:id])
  end

  def new
    @client = Client.new
  end

  def create
    @client = Client.new(client_params)
    @client.save
    redirect_to @client
  end

  def edit
    @client = Client.find(params[:id])
  end

  def update
    @client = Client.find(params[:id])
    @client.update(client_params)
  end

  def destroy
    @client = Client.find(params[:id])
    @client.destroy
  end

  private

  def client_params
    params.require(:client).permit(:name, :phone_number, :email, :address, :post_code, :city, :siret_number, :tva_number)
  end
end
