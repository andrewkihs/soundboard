import React from 'react'
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions'
import { createLike, deleteLike } from '../../actions/like_actions'
import { playSong, setCurrentSong, pauseSong, fetchUser } from '../../actions/playhead_actions'
import { createComment } from '../../actions/comment_actions'
import GridIndexItem from './grid_index_item'

const mSTP = (state, ownProps) => {

  let currentUser = state.entities.users[state.session.id];
  let currentSongPlaying = false;
  let userLikesSong = false;
  let currentLikeId
  let selectedSong = null;
  // debugger
  if (state.playhead.currentSong){
    selectedSong = state.playhead.currrentSong
    if (state.playhead.currentSong.id.toString() === ownProps.songId && !state.playhead.paused){
      currentSongPlaying = true;
    } else {
      currentSongPlaying = false;
    }
  }

  // if(currentUser.likes){

  //   if(currentUser.likes[ownProps.songId]){

  //     userLikesSong = true;
  //     currentLikeId = currentUser.likes[ownProps.songId].id
  //   }
  // }

  return {
    currentUser: currentUser,
    song: state.entities.songs[ownProps.songId],
    currentlyPlaying: currentSongPlaying,
    // userLikesSong: userLikesSong,
    currentLikeId: currentLikeId
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    createComment: (comment, songId) => dispatch(createComment(comment, songId)),
    createLike: (like, songId) => dispatch(createLike(like)),
    deleteLike: (likeId, song) => dispatch(deleteLike(likeId, song))
  }
  
}

export default connect(mSTP, mDTP)(GridIndexItem)