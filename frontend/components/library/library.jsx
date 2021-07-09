import React from 'react'
import SongIndexItemContainer from '../songs/song_index_item_container'

class Library extends React.Component{
  constructor(props){
    super(props)
  }
  
  render() {
    const { songs , currentUser} = this.props
    if (!currentUser.likes){ return <>You have no likes! Start liking some songs to populate this page.</> }
    if (Object.keys(songs).length===0){ return null } 
    else {
      return(
        <>
          <div className="grid-header">
            <h1>
              All your likes in one place.
            </h1>
          </div>
          
          <ul className="stream-ul">
            {Object.keys(currentUser.likes).map((key, i) =>{
              return <SongIndexItemContainer key={i} songId={parseInt(key)}/>
            })}
          </ul>
        </>
      )

    }
  }
}

export default Library