import { RECEIVE_CURRENT_SONG } from "../actions/playhead_actions";

const _nullSong = {
  currentSong: null,
};

export default (state = _nullSong, action) => {
  Object.freeze(state);
  let newState;
  // debugger;
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      return Object.assign({}, { currentSong: action.song });
    default:
      return state;
  }
};
