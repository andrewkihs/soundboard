import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../user_auth/login_form_container';
import SignupFormContainer from '../user_auth/signup_form_container';
import EditProfileContainer from '../user_page/edit_profile_container';
import EditSongContainer from '../songs/song_edit_container'
import DeleteSong from '../songs/delete_song'

function Modal({modal, closeModal}) {

  if (!modal) {
    return null;
  }
  let component;

  if (typeof modal == "object"){
    switch(modal.modal){
      case 'edit-song':
        component = <EditSongContainer song={modal.props}/>;
        break;
      case 'delete-song':
        component = <DeleteSong song={modal.props}/>;
        break;
      default:
        return null;
    }
  } 
  else{

    switch (modal) {
      // case 'edit-profile':
      //   component = <EditProfileContainer />;
      //   break;
      // case 'edit-song':
      //   debugger
      //   component = <EditSongContainer />;
      //   break;
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      default:
        return null;
    }
  } 
  if (modal.modal == 'edit-song'){
    return (

      <div className="edit-song-modal-background" onClick={closeModal}>
        <div className="edit-song-modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
  }
  if (modal.modal == 'delete-song'){
    return (

      <div className="delete-song-modal-background" onClick={closeModal}>
        <div className="delete-song-modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    )
  }
  else {

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
  );
}
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
