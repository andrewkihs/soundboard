export const createLike = (like) => {
  return $.ajax({
    method: 'POST',
    url: `/api/songs/${like.song_id}/likes`,
    data: { like }
  })
}

export const deleteLike = (likeId, song) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/songs/${song.id}/likes/${likeId}`
  })
}