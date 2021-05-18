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
    // debugger
    // let songs = this.props.fetchSongs()
    // let oldState = this.state.songs
    this.props.fetchSongs()
  }

  render() {
    // debugger
    const { songs } = this.props
    // debugger
    if (Object.keys(songs).length===0){
      return( 
        <>
        </>
      )
    } else {
      // debugger
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