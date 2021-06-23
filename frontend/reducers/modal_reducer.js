import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      if (!action.props) {
        return action.modal;
      } else {
        return Object.assign(action);
      }
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
