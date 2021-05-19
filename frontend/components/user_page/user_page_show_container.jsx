import React from 'react'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
import { fetchSongs } from '../../actions/song_actions'
import UserPage from './user_page'

const mSTP = (state, ownProps) => {
  // 
  // let user;
  const songs = Object.values(state.entities.songs)
  const currentUser = state.entities.users[state.session.id]
  const userId = ownProps.match.params.userId;
  const pageOwner = state.entities.users[userId]
  
  let postedSongs = songs.filter((song) => {
    if (song.artistId == ownProps.match.params.userId) return song;
  })

  let likedsongs = []
  // if (pageOwner){
    // if accessing 
    let likedSongs = songs.filter(song => {
      if (pageOwner.likes[song.id]){
        return song
      }
    })
  // }
    // console.log(model.get("key") + searchStr);
    console.log(likedSongs)
    // debugger
    // songs.filter((song) => {
    //   debugger
    //   // if ()
    // })
  
  
  return {
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.userId,
    pageOwner: state.entities.users[ownProps.match.params.userId],
    postedSongs: postedSongs,
    likedSongs: likedSongs
  }
}

const mDTP = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    fetchSongs: () => dispatch(fetchSongs())
  }
}

export default connect(mSTP, mDTP)(UserPage)