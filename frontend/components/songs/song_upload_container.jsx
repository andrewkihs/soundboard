import React from 'react'
import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions'
import SongUpload from './song_upload'

const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    song: {
      title: '',
      description: '',
      artistId: state.session.id,
      imageFile: null,
      imageUrl: null,
      audioFile: null,
      audioUrl: null,
    }
    // songId: ownProps.match.params.songId,
    // song: state.entities.songs[ownProps.match.params.songId]
    // user: state.entities.users[ownProps.match.params.userId]
  }
}

const mDTP = dispatch => {
  return {
    createSong: (formData) => dispatch(createSong(formData))
  }
}

export default connect(mSTP, mDTP)(SongUpload)