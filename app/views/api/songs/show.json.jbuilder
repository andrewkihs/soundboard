# json.song do
  # 
  json.id @song.id
  json.title @song.title
  json.uploader @song.uploader.username
  json.description @song.description
  json.genre @song.genre
  json.artistId @song.artist_id
  json.songUrl url_for(@song.audio)
  json.imageUrl url_for(@song.image)

  json.set! :likes do
    @song.likes.each do |like|
      json.set! like.id do
        json.extract! like, :id, :song_id, :liker_id
        json.id like.id
      end
    end
  end


json.comments @song.comments.as_json(only: [:id, :body, :user_id])
