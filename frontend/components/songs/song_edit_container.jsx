import React from 'react'
import { connect } from 'react-redux';
import { fetchSong, updateSong } from '../../actions/song_actions'
import SongEdit from './song_edit'


const mSTP = (state, ownProps) => {

  const songLoaded = () => {
    if (state.entities.songs[ownProps.match.params.songId]){
      return true;
    } else {
      return false
    }
  }
  let userOwnsSong = false;
  if (songLoaded){
    userOwnsSong = state.entities.users[state.session.id].id === state.entities.songs[ownProps.match.params.songId].artistId
  }
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    userOwnsSong: userOwnsSong,
    songId: ownProps.match.params.songId,
    song: state.entities.songs[ownProps.match.params.songId],
    songUrl: (songLoaded() ? state.entities.songs[ownProps.match.params.songId].songUrl : '')
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    updateSong: (song, id) => dispatch(updateSong(song, id))
  }
}

export default connect(mSTP, mDTP)(SongEdit)