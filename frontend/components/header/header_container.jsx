import React from 'react';
import { connect } from 'react-redux';
import Header from './header'
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions'


const mapStateToProps = state => {
  // debugger

  return {
  currentUser: state.entities.users[state.session.id],
  currPath: window.location.href
}};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);