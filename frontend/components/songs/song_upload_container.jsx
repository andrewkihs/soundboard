import React from 'react'
import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions'
import SongUpload from './song_upload'

const mSTP = (state, ownProps) => {
  // 
  return {
    currentUser: state.entities.users[state.session.id],
    song: {
      title: '',
      description: '',
      artistId: state.session.id,
      genre: 'None',
      imageFile: null,
      imageUrl: null,
      audioFile: null,
      audioUrl: null,
    }
  }
}

const mDTP = dispatch => {
  return {
    createSong: (formData) => dispatch(createSong(formData))
  }
}

export default connect(mSTP, mDTP)(SongUpload)