json.song do
  # debugger
  json.id @song.id
  json.title @song.title
  json.description @song.description
  json.artistId @song.artist_id
  json.songUrl url_for(@song.audio)
  # json.imageUrl url_for(@song.image)
end