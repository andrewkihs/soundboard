import React from 'react'
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions'
import { setCurrentSong } from '../../actions/playhead_actions'
import SongShow from './song_show'


const mSTP = (state, ownProps) => {

  // 
  const songLoaded = () => {
    if (state.entities.songs[ownProps.match.params.songId]){
      return true;
    } else {
      return false
    }
  }

  return {
    currentUser: state.entities.users[state.session.id],
    songId: ownProps.match.params.songId,
    song: state.entities.songs[ownProps.match.params.songId],
    songUrl: (songLoaded() ? state.entities.songs[ownProps.match.params.songId].songUrl : '')
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song))
  }
}

export default connect(mSTP, mDTP)(SongShow)