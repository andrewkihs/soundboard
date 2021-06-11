import {
  RECEIVE_SONG,
  RECEIVE_SONGS,
  REMOVE_SONG,
} from "../actions/song_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SONG:
      return Object.assign({}, state, {
        [action.song.song.id]: action.song.song,
      });
    case RECEIVE_SONGS:
      return Object.assign({}, action.songs);
    case REMOVE_SONG:
      let newState = Object.assign({}, state);
      delete newState[action.songId];
      return newState;
    default:
      return state;
  }
};

// export default songReducer
