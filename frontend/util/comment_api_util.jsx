export const createComment = (comment, songId) => (
  $.ajax({
    method: 'POST',
    url: `api/songs/${songId}/comments`,
    data:  { comment }
  })
)