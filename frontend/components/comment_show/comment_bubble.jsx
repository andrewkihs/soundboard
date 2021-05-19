import React from 'react'
import {Link} from 'react-router-dom'
class CommentBubble extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false,
    }
    this.handleHoverEnter = this.handleHoverEnter.bind(this)
    this.handleHoverExit = this.handleHoverExit.bind(this)
  }

  componentDidMount(){
    // 
    this.props.fetchUser(this.props.commenterId)
  }

  handleHoverEnter(e){
    console.log("hover")
    this.setState({hover: true})
  }
  
  handleHoverExit(e){
    console.log("end hover")
    this.setState({hover: false})
  }

  render() {
    // 
    const {comment, commenter} = this.props
    if (commenter === undefined){
      // 
      return null
    } else{
      // 
      return (
      <div className="comment-bubble">
        <Link to={`users/${commenter.id}`}>

          <img className="comment-avatar-image"
            onMouseOver={this.handleHoverEnter}
            onMouseOut={this.handleHoverExit}
            src="https://lorimcnee.com/wp-content/uploads/2010/05/avatar.jpg">
          </img>
        </Link>
        <div className={this.state.hover ? "comment-reveal" : "comment-hidden"}>
          <div>{commenter.displayName}</div>
          <div>{comment.body}</div>
        </div>
      </div>
      )
    }
  }
}

export default CommentBubble