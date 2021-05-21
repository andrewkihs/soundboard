import React from 'react'
import {Link} from 'react-router-dom'
class CommentBubble extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false,
      // randomPos: Math.floor(Math.random()*255)
    }
    this.handleHoverEnter = this.handleHoverEnter.bind(this)
    this.handleHoverExit = this.handleHoverExit.bind(this)

  }

  componentDidMount(){
    // 
    this.props.fetchUser(this.props.commenterId)
  }

  handleHoverEnter(e){
    this.setState({hover: true})
  }
  
  handleHoverExit(e){
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
        <>
        <Link to={`users/${commenter.id}`}>

          <img className="comment-avatar-image"
            onMouseOver={this.handleHoverEnter}
            onMouseOut={this.handleHoverExit}
            src={commenter.avatarUrl ? commenter.avatarUrl : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}>
          </img>
        </Link>
        <div className={this.state.hover ? "comment-reveal" : "comment-hidden"}>
          <div>{commenter.displayName}</div>
          <div>{comment.body}</div>
        </div>
        </>
      )
    }
  }
}

export default CommentBubble