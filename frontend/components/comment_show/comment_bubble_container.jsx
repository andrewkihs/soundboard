import  CommentBubble from './comment_bubble'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions'
const mapStateToProps = (state, ownProps) => {
  // debugger

  // debugger
  return {
    comment: ownProps.comment,
    commenterId: ownProps.comment.user_id,
    commenter: state.entities.users[ownProps.comment.user_id]
  }
};

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logout()),
  fetchUser: (userId) => dispatch(fetchUser(userId))
  // openModal: modal => dispatch(openModal(modal))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentBubble);