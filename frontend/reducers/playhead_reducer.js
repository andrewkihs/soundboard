import {
  RECEIVE_CURRENT_SONG,
  PLAY_SONG,
  PAUSE_SONG,
  SEEK_SONG,
} from "../actions/playhead_actions";

const _nullSong = {
  currentSong: null,
  paused: true,
  currentTime: 0,
};

export default (state = _nullSong, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // ;
  debugger
  switch (action.type) {
    case PLAY_SONG:
      return { paused: false, currentSong: state.currentSong, currentTime: state.currentTime };
    case PAUSE_SONG:
      return { paused: true, currentSong: state.currentSong, currentTime: state.currentTime };
    case RECEIVE_CURRENT_SONG:
      return Object.assign(newState, { currentSong: action.song, currentTime: 0 });
    case SEEK_SONG:
      return Object.assign(newState, { currentTime: action.progress})
    default:
      return state;
  }
};
