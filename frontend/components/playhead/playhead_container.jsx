import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import Playhead from './playhead'

const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentSong: state.playhead.currentSong,
    // userId: ownProps.match.params.userId,
    // pageOwner: state.entities.users[ownProps.match.params.userId],
  }
}

const mDTP = dispatch => {

  // song play actions go here !!
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
}

export default connect(mSTP, mDTP)(Playhead)