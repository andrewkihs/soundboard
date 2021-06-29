import React from 'react'
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions'
import { closeModal } from '../../actions/modal_actions'
import EditProfile from './edit_profile'

const mSTP = (state, ownProps) => {
  debugger
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mDTP = dispatch => {
  return {
    updateUser: (user, userId) => dispatch(updateUser(user, userId)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(EditProfile)