import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, signup } from '../../actions/session_actions';
import SignUpForm from './signup_form.jsx';
import { openModal, closeModal } from '../../actions/modal_actions'

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
