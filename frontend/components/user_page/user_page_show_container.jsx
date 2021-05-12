import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import UserPage from './user_page'
const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[ownProps.match.params.userId]
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default connect(mSTP, mDTP)(UserPage)