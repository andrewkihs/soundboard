import React from 'react'
import { connect } from 'react-redux';
import { fetchSong, fetchSongs } from '../../actions/song_actions'
import { setCurrentSong } from '../../actions/playhead_actions'
import { openModal } from '../../actions/modal_actions';
import Splash from "./splash"


const mSTP = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    songs: state.entities.songs
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song)),
    fetchSongs: () => dispatch(fetchSongs()),
    openModal: modal => dispatch(openModal(modal))
  }
}

export default connect(mSTP, mDTP)(Splash)