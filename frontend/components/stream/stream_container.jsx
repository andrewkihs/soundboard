import React from 'react'
import Stream from './stream'
import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions'

const mSTP = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    songs: state.entities.songs
  }
}

const mDTP = dispatch => {
  return {
    fetchSongs: () => dispatch(fetchSongs())
  }
}

export default connect(mSTP, mDTP)(Stream)