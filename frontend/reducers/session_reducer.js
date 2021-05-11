import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from "../actions/session_actions";

const _nullSession = {
  id: null,
};

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger;
      return Object.assign({}, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      debugger;
      return Object.assign({}, { id: null });
    default:
      return state;
  }
};
