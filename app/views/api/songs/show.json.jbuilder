json.song do
  # debugger
  json.id @song.id
  json.title @song.title
  json.uploader @song.uploader.username
  json.description @song.description
  json.genre @song.genre
  json.artistId @song.artist_id
  json.songUrl url_for(@song.audio)
  json.imageUrl url_for(@song.image)
  json.likes @song.likes.as_json(only: [:id, :liker_id])

  json.comments @song.comments.as_json(only: [:id, :body, :user_id])
end