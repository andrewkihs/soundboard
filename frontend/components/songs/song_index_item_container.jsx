import React from 'react'
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions'
import { createLike } from '../../actions/like_actions'
import { playSong, setCurrentSong } from '../../actions/playhead_actions'
import { createComment } from '../../actions/comment_actions'
import SongIndexItem from './song_index_item'

const mSTP = (state, ownProps) => {

  // debugger
  // const songLoaded = () => {
  
  // }
  let currentSongPlaying = false;
  if (state.playhead.currentSong){
    if (state.playhead.currentSong.id.toString() === ownProps.songId){
      currentSongPlaying = true;
    } else {
      currentSongPlaying = false;
    }
  }
  // debugger
  return {
    currentUser: state.entities.users[state.session.id],
    song: state.entities.songs[ownProps.songId],
    currentlyPlaying: currentSongPlaying
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    createComment: (comment, songId) => dispatch(createComment(comment, songId)),
    createLike: (like, songId) => dispatch(createLike(like))
  }
  
}

export default connect(mSTP, mDTP)(SongIndexItem)