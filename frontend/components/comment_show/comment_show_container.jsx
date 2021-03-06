import React from 'react';
import { connect } from 'react-redux';
import CommentShow from './comment_show'



const mapStateToProps = (state, ownProps) => {

  return {
    song: state.entities.songs[ownProps.song.id]
  }
};

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId))
  // openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentShow);