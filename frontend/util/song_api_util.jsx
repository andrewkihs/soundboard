export const fetchSongs = () => (
  $.ajax({
    method: 'GET',
    url: 'api/songs'
  })
)

export const fetchSong = (songId) => (
  $.ajax({
    method: 'GET',
    url: `api/songs/${songId}`
  })
)


export const createSong = (formData) => (
  $.ajax({
    method: 'POST',
    url: `api/songs/`,
    data: formData,
    contentType: false,
    processData: false,
  })
)

// TODO
// export const updateSong = (song) => (
//   $.ajax({
//     method: 'POST',
//     url: `api/songs/${song.id}`
//   })
// )

// TODO
// export const deleteSong = songId => (
//   $.ajax({
//     method: 'DELETE',
//     url: `api/tracks/${songId}`
//   })
// )