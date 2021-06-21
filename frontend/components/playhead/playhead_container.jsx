import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import {playSong, pauseSong} from '../../actions/playhead_actions'
import Playhead from './playhead'

const mSTP = (state, ownProps) => {
  // 
  let currentUserLikes = false;
  if (state.session.id){

    if (state.entities.users[state.session.id].likes && state.playhead.currentSong){
      if (state.entities.users[state.session.id].likes[state.playhead.currentSong.id]){
        currentUserLikes = true;
      }
    }
  }
  // debugger
  return {
    currentSong: state.playhead.currentSong,
    currentUser: state.entities.users[state.session.id],
    currentUserLikes: currentUserLikes,
    paused: state.playhead.paused
    // pageOwner: state.entities.users[ownProps.match.params.userId],
  }
}

const mDTP = dispatch => {

  // song play actions go here !!
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    playSong:  () => dispatch(playSong()),
    pauseSong:  () => dispatch(pauseSong()),
  }
}

export default connect(mSTP, mDTP)(Playhead)