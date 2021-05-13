import * as SongAPIUtil from "../util/song_api_util";

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";

export const receiveSongs = (songs) => ({
  type: RECEIVE_SONGS,
  songs,
});

export const receiveSong = (song) => ({
  type: RECEIVE_SONG,
  song,
});

export const fetchSongs = () => (dispatch) => {
  SongAPIUtil.fetchSongs().then((songs) => dispatch(receiveSongs(songs)));
};

export const fetchSong = (songId) => (dispatch) => {
  SongAPIUtil.fetchSong(songId).then((song) => dispatch(receiveSong(song)));
};
