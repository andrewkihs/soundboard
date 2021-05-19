import React from 'react'
import SongIndexItemContainer from '../songs/song_index_item_container'

class Library extends React.Component{
  constructor(props){
    super(props)
  }
  

  componentDidMount() {
    // 
    // let songs = this.props.fetchSongs()
    // let oldState = this.state.songs
    this.props.fetchSongs()
  }

  filterLikes(obj){
    let res = {}  
    const toArr = Object.entries(obj)
    // debugger  

  }

  render() {
    // 
    // return null
    const { songs } = this.props
    // 
    if (!this.props.currentUser.likes){
      return(
        <>no likes</>
      )
    }
    if (Object.keys(this.props.currentUser.likes).length===0){
      return( 
        <>
        </>
      )
    } else {
      // this.filterLikes(songs)
      return(
        <>
          <ul className="stream-ul">
            
            {Object.keys(this.props.currentUser.likes).map((key, i) =>{
              return <SongIndexItemContainer key={i} songId={key}/>
            })}
          </ul>
        </>
      )

    }
  }
}

export default Library