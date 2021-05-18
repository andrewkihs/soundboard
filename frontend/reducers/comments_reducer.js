import { RECEIVE_SONG } from "../actions/song_actions";
import { RECEIVE_COMMENT } from "../actions/comment_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT:
    // debugger;
    case RECEIVE_SONG:
      return Object.assign({}, state, action.song.comments);
    default:
      return state;
  }
};
