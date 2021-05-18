export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
// import * as SongAPIUtil from "../util/song_api_util";
export const receiveCurrentSong = (song) => ({
  type: RECEIVE_CURRENT_SONG,
  song,
});

export const playSong = () => ({
  type: PLAY_SONG,
});

export const pauseSong = () => ({
  type: PAUSE_SONG,
});

export const setCurrentSong = (song) => (dispatch) => {
  dispatch(receiveCurrentSong(song));
};
