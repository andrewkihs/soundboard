export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
// import * as SongAPIUtil from "../util/song_api_util";
export const receiveCurrentSong = (song) => ({
  type: RECEIVE_CURRENT_SONG,
  song,
});

export const setCurrentSong = (song) => (dispatch) => {
  dispatch(receiveCurrentSong(song));
};
