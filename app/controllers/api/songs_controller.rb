class Api::SongsController < ApplicationController

  # def index
  #   @songs = Song.all
  #   render 'api/songs/index'
  # end

  def show
    @song = Song.find(params[:id])
    render '/api/songs/show'
  end

  def create
    @song = Song.create!(song_params)
    render :show
  end

  private

  def song_params
    params.require(:song).permit(
      :artist_id,
      :title
    )
  end

  
end