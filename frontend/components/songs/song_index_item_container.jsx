import React from 'react'
import { connect } from 'react-redux';
import { fetchSong } from '../../actions/song_actions'
import { createLike, deleteLike } from '../../actions/like_actions'
import { openModal } from '../../actions/modal_actions'
import { playSong, setCurrentSong, pauseSong, setCurrentProgress } from '../../actions/playhead_actions'
import { createComment } from '../../actions/comment_actions'
import { fetchUser } from '../../actions/user_actions'
import SongIndexItem from './song_index_item'

const mSTP = (state, ownProps) => {
  let currentSongPlaying = false;
  let userLikesSong = false;
  let currentLikeId
  let selectedSong = null;
  let currentUser
  let currentTime = 0;
  if (state.playhead.currentSong) {
    currentTime = state.playhead.currentTime;
    selectedSong = state.playhead.currrentSong
    if (state.playhead.currentSong.id === ownProps.songId && !state.playhead.paused) {
      currentSongPlaying = true;
    } else {
      currentSongPlaying = false;
    }
  }
  if (state.session.id) {  // if there is a current session

    currentUser = state.entities.users[state.session.id];
    if (currentUser.likes) {

      if (currentUser.likes[ownProps.songId]) {
        userLikesSong = true;
        currentLikeId = currentUser.likes[ownProps.songId].id
      } else {
        userLikesSong = false;
      }
    }
  }

  // let uploader = null
  // if (state.entities.users[state.entities.songs[ownProps.songId]]){

  //   uploader = state.entities.users[state.entities.songs[ownProps.songId].artistId]
  // }

  return {
    currentUser: currentUser,
    song: state.entities.songs[ownProps.songId],
    currentPlayhead: state.playhead,
    currentlyPlaying: currentSongPlaying,
    userLikesSong: userLikesSong,
    currentTime: currentTime,
    currentLikeId: currentLikeId,
    // uploader: uploader
  }
}

const mDTP = dispatch => {
  return {
    fetchSong: (songId) => dispatch(fetchSong(songId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: (modal, song) => dispatch(openModal(modal, song)),
    setCurrentSong: (song) => dispatch(setCurrentSong(song)),
    setCurrentProgress: (progress) => dispatch(setCurrentProgress(progress)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    createComment: (comment, song) => dispatch(createComment(comment, song)),
    createLike: (like, songId) => dispatch(createLike(like)),
    deleteLike: (likeId, song) => dispatch(deleteLike(likeId, song))
  }

}

export default connect(mSTP, mDTP)(SongIndexItem)