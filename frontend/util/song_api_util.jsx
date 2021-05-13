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


// TODO
// export const createSong = (song) => (
//   $.ajax({
//     method: 'POST',
//     url: `api/songs/`
//   })
// )

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