import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import { fetchSongs } from '../../actions/song_actions'
import EditProfile from './edit_profile'

const mSTP = (state, ownProps) => {
  // 

  return {
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.userId,
    pageOwner: state.entities.users[ownProps.match.params.userId],
    postedSongs: postedSongs,
    likedSongs: likedSongs
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  }
}

export default connect(mSTP, mDTP)(EditProfile)