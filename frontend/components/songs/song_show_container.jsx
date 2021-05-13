import React from 'react'
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions'
import SongShow from './song_show'

const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    songId: ownProps.match.params.songId,
    song: state.entities.songs[ownProps.match.params.songId]
    // user: state.entities.users[ownProps.match.params.userId]
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId))
  }
}

export default connect(mSTP, mDTP)(SongShow)