import React from 'react'
import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions'
import EditProfile from './edit_profile'

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
  }
}

const mDTP = dispatch => {
  return {
    updateUser: (user) => dispatch(updateUser(user)),
  }
}

export default connect(mSTP, mDTP)(EditProfile)