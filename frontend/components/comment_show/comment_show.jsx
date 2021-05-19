import React from 'react'
import CommentBubbleContainer from './comment_bubble_container'

class CommentShow extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const {comments} = this.props
    // 
    return (
      <div>
        {comments.map((ele, i) => {
          return (<CommentBubbleContainer
            className="stream-comment"
            key={ele.id}
            comment={ele}>
              {ele.body}
            </CommentBubbleContainer>)
        })}
      </div>
    // return (<div>hello</div>)
    )
  }
}
export default CommentShow