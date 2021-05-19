class Api::LikesController < ApplicationController 
  def create
    # 
    @like = Like.new(like_params)
    if @like.save!
      @song = Song.find(@like.song_id)
      render "api/songs/show"
    else
      render json: @like.errors.full_message, status: 422
    end
  end

  def destroy
    @like = Like.find(params[:id])
    if @like.destroy
      render json: @like
    else
      render json: @like.errors.full_message, status: 422
    end
  end


  private
  def like_params
    params.require(:like).permit(:liker_id, :song_id)
  end
end