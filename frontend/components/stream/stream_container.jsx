import React from 'react'
import Stream from './stream'
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions'

const mSTP = (state, ownProps) => {
  // 
  return {
    currentUser: state.entities.users[state.session.id],
    songs: state.entities.songs
    // userId: ownProps.match.params.userId,
    
    // pageOwner: state.entities.users[ownProps.match.params.userId],
  }
}

const mDTP = dispatch => {
  // 
  // song play actions go here !!
  return {
    // fetchUser: (userId) => dispatch(fetchUser(userId))
    fetchSongs: () => dispatch(fetchSongs())
  }
}

export default connect(mSTP, mDTP)(Stream)