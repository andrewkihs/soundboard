class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render 'api/users/index'
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def update 
    @user = User.find_by(id: params[:id])
    debugger
    if @user && @user.update(user_params)
      render '/api/users/show'
    elsif !@user
      render json: ["Can't find user"], status: 400
    else
      render json @user.errors.full_messages, status: 400
    end
  end
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username, 
      :password, 
      :email, 
      :display_name, 
      :age,
      :gender,
      :bio,
      :city,
      :country,
      :first_name,
      :last_name,
      :header,
      :avatar
    )
  end


end
