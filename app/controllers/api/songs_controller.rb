class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render 'api/songs/index'
  end

  def show
    @song = Song.find(params[:id])
    render '/api/songs/show'
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render '/api/songs/show'
    else
      render json: @song.errors.full_messages, status: 401
    end
  end

  def update 
    @song = Song.find(params[:id])
    if @song.update(song_params)
      render "api/songs/show"
    else
      render json: @song.errors.full_messages, status: 401
    end
  end

  def destroy 
    @song = Song.find(params[:id])
    @song.destroy
    render json: {}
  end
  private

  def song_params
    params.require(:song).permit(
      :artist_id,
      :title,
      :description,
      :audio,
      :image,
      :genre
    )
  end

  
end