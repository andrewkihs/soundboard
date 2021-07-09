import React from 'react'
import SongIndexItemContainer from '../songs/song_index_item_container'

class Stream extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    const { songs } = this.props
    
    if (Object.keys(songs).length===0){
      return null
    } else {
      return(
        <>
          <div className="stream-page">

            <div className="grid-header">
              <h1>See what's streaming on SoundBoard</h1>
            </div>

            <div className="stream-show-mc">

              <div className="song-container-stream-show">
                  {Object.keys(this.props.songs).map((key, i) =>{
                    return <SongIndexItemContainer key={i} songId={parseInt(key)}/>
                  })}
              </div>
              <div className="stream-right-hand-bar">
                  {/* TODO: Follower/Followee count and sidebar image go here */}
              </div>
            </div>
          </div>
        </>
      )

    }
  }
}

export default Stream