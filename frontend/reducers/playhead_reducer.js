import {
  RECEIVE_CURRENT_SONG,
  PLAY_SONG,
  PAUSE_SONG,
} from "../actions/playhead_actions";

const _nullSong = {
  currentSong: null,
  paused: true,
};

export default (state = _nullSong, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // debugger;
  switch (action.type) {
    case PLAY_SONG:
      return { paused: false, currentSong: state.currentSong };
    case PAUSE_SONG:
      return (newState["paused"] = true);
    case RECEIVE_CURRENT_SONG:
      return Object.assign(newState, { currentSong: action.song });
    default:
      return state;
  }
};
