class Api::UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update_attributes(user_params)
      redirect_to "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def delete
    @user = User.find(params[:id])
    delete(@user)
    redirect_to :root
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end