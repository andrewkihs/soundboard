import React from 'react'
import SongIndexItemContainer from '../songs/song_index_item_container'

class Stream extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   songs: {}
    // }
  }
  

  componentDidMount() {
    // 
    // let songs = this.props.fetchSongs()
    // let oldState = this.state.songs
    this.props.fetchSongs()
  }

  render() {
    // 
    const { songs } = this.props
    // 
    if (Object.keys(songs).length===0){
      return( 
        <>
        </>
      )
    } else {
      // 
      return(
        <>
          <ul className="stream-ul">

          {Object.keys(this.props.songs).map((key, i) =>{
            return <SongIndexItemContainer key={i} songId={key}/>
          })}
          </ul>
        </>
      )

    }
  }
}

export default Stream