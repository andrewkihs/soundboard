
json.id @song.id
json.title @song.title
json.uploader @song.uploader.display_name
json.uploaderAvatar url_for(@song.uploader.avatar)
json.description @song.description
json.genre @song.genre
json.artistId @song.artist_id
json.songUrl url_for(@song.audio)
if @song.image.attached? 
  json.imageUrl url_for(@song.image)
else
    json.imageUrl url_for(@song.uploader.avatar)
end
json.timePosted @song.created_at
peaks = song.audio_peaks ? song.audio_peaks : []
json.audioPeaks peaks 
json.set! :likes do
  @song.likes.each do |like|
    json.set! like.id do
      json.extract! like, :id, :song_id, :liker_id
      json.id like.id
    end
  end
end


json.comments @song.comments.as_json(only: [:id, :body, :user_id])
