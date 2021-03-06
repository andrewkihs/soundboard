import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import { playSong, pauseSong } from '../../actions/playhead_actions'
import Playhead from './playhead'

const mSTP = (state, ownProps) => {
  // 
  let currentUserLikes = false;
  if (state.session.id) {

    if (state.entities.users[state.session.id].likes && state.playhead.currentSong) {
      if (state.entities.users[state.session.id].likes[state.playhead.currentSong.id]) {
        currentUserLikes = true;
      }
    }
  }
  return {
    currentSong: state.playhead.currentSong,
    currentTime: state.playhead.currentTime,
    currentUser: state.entities.users[state.session.id],
    currentUserLikes: currentUserLikes,
    paused: state.playhead.paused
  }
}

const mDTP = dispatch => {


  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
  }
}

export default connect(mSTP, mDTP)(Playhead)