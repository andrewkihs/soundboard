import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import {playSong, pauseSong} from '../../actions/playhead_actions'
import Playhead from './playhead'

const mSTP = (state, ownProps) => {
  // 
  return {
    currentSong: state.playhead.currentSong,
    // userId: ownProps.match.params.userId,
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