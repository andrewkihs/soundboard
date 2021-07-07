import React from 'react';
import { connect } from 'react-redux';
import Header from './header'
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions'
import { fetchSongs } from '../../actions/song_actions';

const mapStateToProps = state => {
  // 

  return {
  currentUser: state.entities.users[state.session.id],
  currPath: window.location.href
}};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchSongs: () => dispatch(fetchSongs())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);