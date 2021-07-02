export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const SEEK_SONG = "SEEK_SONG";

export const RECEIVE_NEXT_SONG = "RECEIVE_NEXT_SONG";
export const RECEIVE_PREV_SONG = "RECEIVE_PREV_SONG";

// import * as SongAPIUtil from "../util/song_api_util";
export const receiveCurrentSong = (song) => ({
  type: RECEIVE_CURRENT_SONG,
  song,
});

export const seekSong = (progress) => ({
  type: SEEK_SONG,
  progress,
});

export const playSong = () => ({
  type: PLAY_SONG,
});

export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const setCurrentSong = (song) => (dispatch) =>
  dispatch(receiveCurrentSong(song));

export const setCurrentProgress = (progress) => (dispatch) =>
  dispatch(seekSong(progress));
