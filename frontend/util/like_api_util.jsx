export const createLike = (like) => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: `/api/songs/${like.song_id}/likes`,
    data: { like }
  })
}

export const deleteLike = (likeId, songId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/songs/${songId}/likes/${likeId}`
  })
}