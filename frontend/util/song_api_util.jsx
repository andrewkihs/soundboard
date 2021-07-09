import * as convert from "../util/camel_to_snake";

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


export const createSong = (formDataObj) => {
  let formData = convert.formDataConvert(formDataObj);

  const req = $.ajax({
    method: 'POST',
    url: `api/songs/`,
    data: formData,
    contentType: false,
    processData: false,
  })
  return req
}

export const updateSong = (song, songId) => {
  let formData = convert.formDataConvert(song);
  
  const req = $.ajax({
    method: 'PATCH',
    url: `api/songs/${songId}`,
    data: formData,
    contentType: false,
    processData: false,
  })
  return req
}

export const deleteSong = songId => (
  $.ajax({
    method: 'DELETE',
    url: `api/songs/${songId}`
  })
)