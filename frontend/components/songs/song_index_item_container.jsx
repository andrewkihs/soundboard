import React from 'react'
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions'
import { setCurrentSong } from '../../actions/playhead_actions'
import SongIndexItem from './song_index_item'

const mSTP = (state, ownProps) => {

  debugger
  const songLoaded = () => {
  
  }

  return {
    currentUser: state.entities.users[state.session.id],
    // songId: ownProps.match.params.songId,
    song: ownProps.song,
    // songUrl: (songLoaded() ? state.entities.songs[ownProps.match.params.songId].songUrl : '')
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song))
  }
}

export default connect(mSTP, mDTP)(SongIndexItem)