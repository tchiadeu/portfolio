class BillsController < ApplicationController
  def index
    @bills = Bill.all
  end

  def show
    @bill = Bill.find(params[:id])
    respond_to do |format|
      format.html
      format.pdf do
        render pdf: "F-#{Date.today.strftime('%Y%m%d')}-#{Bill.number}",
               template: 'bills/show',
               formats: [:html],
               encoding: 'utf8'
      end
    end
  end

  def new
    @bill = Bill.new
  end

  def create
    @bill = Bill.new(bill_params)
    @bill.save
    redirect_to @bill
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
    params.require(:bill).permit(:number, :total_amount)
  end
end
