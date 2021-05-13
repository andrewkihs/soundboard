json.song do
  json.id @song.id
  json.title @song.title
  json.description @song.description
  json.artist_id @song.artist_id
  json.song_url url_for(@song.audio)
end