import React from 'react'
import { connect } from 'react-redux';
import { fetchSong, fetchSongs } from '../../actions/song_actions'
import { setCurrentSong } from '../../actions/playhead_actions'
import Discover from './discover'


const mSTP = (state, ownProps) => {
  // debugger
  // 
  // const songLoaded = () => {
  //   if (state.entities.songs[ownProps.match.params.songId]){
  //     return true;
  //   } else {
  //     return false
  //   }
  // }

  return {
    currentUser: state.entities.users[state.session.id],
    songs: state.entities.songs
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song)),
    fetchSongs: () => dispatch(fetchSongs())
  }
}

export default connect(mSTP, mDTP)(Discover)