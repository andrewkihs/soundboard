import React from 'react'
import CommentBubbleContainer from './comment_bubble_container'

class CommentShow extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const {song} = this.props
    if (!song.comments) return null
    else{
      return (
        <>
        {song.comments.map((ele, i) => {
          return (
            <div className="comment-bubble" key={ele.id}
            style={{left: `${Math.floor(Math.random()*680)}px`}}>
              <CommentBubbleContainer
                className="stream-comment"
                key={ele.id}
                comment={ele}>
                  {ele.body}
                </CommentBubbleContainer>
            </div>
            )
          })}
      </>
    // return (<div>hello</div>)
    )
  }
  }
}
export default CommentShow