import React from 'react'
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions'
import { createLike, deleteLike } from '../../actions/like_actions'
import { playSong, setCurrentSong } from '../../actions/playhead_actions'
import { createComment } from '../../actions/comment_actions'
import SongIndexItem from './song_index_item'

const mSTP = (state, ownProps) => {

  let currentUser = state.entities.users[state.session.id];
  let currentSongPlaying = false;
  let userLikesSong = false;
  let currentLikeId
  // debugger
  if (state.playhead.currentSong){
    if (state.playhead.currentSong.id.toString() === ownProps.songId){
      currentSongPlaying = true;
    } else {
      currentSongPlaying = false;
    }
  }
  if(currentUser.likes){

    if(currentUser.likes[ownProps.songId]){

      userLikesSong = true;
      currentLikeId = currentUser.likes[ownProps.songId].id
    }
  }
    // debugger
  return {
    currentUser: currentUser,
    song: state.entities.songs[ownProps.songId],
    currentlyPlaying: currentSongPlaying,
    userLikesSong: userLikesSong,
    currentLikeId: currentLikeId
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    createComment: (comment, songId) => dispatch(createComment(comment, songId)),
    createLike: (like, songId) => dispatch(createLike(like)),
    deleteLike: (likeId, song) => dispatch(deleteLike(likeId, song))
  }
  
}

export default connect(mSTP, mDTP)(SongIndexItem)