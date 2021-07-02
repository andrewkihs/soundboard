import {
  RECEIVE_CURRENT_SONG,
  PLAY_SONG,
  PAUSE_SONG,
  SEEK_SONG,
  RECEIVE_NEXT_SONG,
  RECEIVE_PREV_SONG,
} from "../actions/playhead_actions";

const _nullSong = {
  currentSong: null,
  paused: true,
  currentTime: 0,
  queue: [],
  played: [],
};

export default (state = _nullSong, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  // ;

  switch (action.type) {
    case PLAY_SONG:
      return Object.assign(newState, {
        paused: false,
        currentSong: state.currentSong,
        currentTime: state.currentTime,
      });

    case PAUSE_SONG:
      return Object.assign(newState, {
        paused: true,
        currentSong: state.currentSong,
        currentTime: state.currentTime,
      });
    case RECEIVE_CURRENT_SONG:
      return Object.assign(newState, {
        currentSong: action.song,
        currentTime: 0,
      });
    case RECEIVE_NEXT_SONG:
      newState.queue.unshift(action.song);
      return newState;
    case RECEIVE_PREV_SONG:
      if (!newState.played.includes(action.song.id)) {
        newState.played.push(action.song.id);
      }
      return newState;
    case SEEK_SONG:
      return Object.assign(newState, { currentTime: action.progress });
    default:
      return state;
  }
};
