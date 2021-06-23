import React from 'react'
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { fetchSong, updateSong } from '../../actions/song_actions'
import SongEdit from './song_edit'


const mSTP = (state, ownProps) => {
  debugger
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    song: ownProps.song
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    updateSong: (song, id) => dispatch(updateSong(song, id)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mSTP, mDTP)(SongEdit)