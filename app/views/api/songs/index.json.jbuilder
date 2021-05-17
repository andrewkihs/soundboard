
@songs.each do |song|
  json.set! song.id do
    json.id song.id
    json.title song.title
    json.description song.description
    json.genre song.genre
    json.artistId song.artist_id
    json.uploader song.uploader.username
    if song.audio.attached? 
      json.songUrl url_for(song.audio)
    end
    if song.image.attached?
      json.imageUrl url_for(song.image)
    # else
    #   json.imageUrl
    end
  end
end