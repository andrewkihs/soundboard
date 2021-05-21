import React from 'react'
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions'
import { setCurrentSong } from '../../actions/playhead_actions'
import Grid from './grid'


const mSTP = (state, ownProps) => {

  const songLoaded = () => {
    if (state.entities.songs[ownProps.songId]){
      return true;
    } else {
      return false
    }
  }

  return {
    currentUser: state.entities.users[state.session.id],
    songId: ownProps.songId,
    song: state.entities.songs[ownProps.songId],
    songUrl: (songLoaded() ? state.entities.songs[ownProps.songId].songUrl : '')
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song))
  }
}

export default connect(mSTP, mDTP)(Grid)