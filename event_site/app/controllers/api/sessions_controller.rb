class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      redirect_to :root
    else
      render json: ["Invalid email/password combo"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout!
      redirect_to :root
    else
      render json: ["No one logged in!"], status: 404
    end
  end
end
