class Api::CommentsController < ApplicationController
  def create
    # debugger
    @comment = current_user.comments.new(comment_params)
    @comment.song_id = params[:song_id]
    if @comment.save!
      @song = Song.find(@comment.song_id)
      render "api/songs/show"
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:body, :song_id, :user_id)
  end
end