import * as SongAPIUtil from "../util/song_api_util";

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const REMOVE_SONG = "REMOVE_SONG";

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs,
});

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song,
});

export const removeSong = (songId) => ({
  type: REMOVE_SONG,
  songId,
});

export const fetchSongs = () => (dispatch) => {
  SongAPIUtil.fetchSongs().then((songs) => dispatch(receiveSongs(songs)));
};

export const fetchSong = (songId) => (dispatch) => {
  SongAPIUtil.fetchSong(songId).then((song) => dispatch(receiveSong(song)));
};

export const createSong = (song) => (dispatch) => {
  SongAPIUtil.createSong(song).then((song) => dispatch(receiveSong(song)));
};

export const updateSong = (song, id) => (dispatch) => {
  SongAPIUtil.updateSong(song, id).then((payload) =>
    dispatch(receiveSong(payload))
  );
};

export const deleteSong = (songId) => (dispatch) =>
  APIUtil.deleteSong(songId).then((song) => dispatch(removeSong(songId)));
