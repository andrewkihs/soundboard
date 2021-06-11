import React from 'react'
import SongIndexItemContainer from './song_index_item_container'
class SongShow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      play: false,
      pause: true,
      song: props.song,

    }

    this.play = this.play.bind(this)
  }
  
  play = () => {
 
    this.props.setCurrentSong(this.props.song)
  }
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.state.audioPlayer.pause();
  }

  componentDidMount(){
    this.props.fetchSong(this.props.songId)
  }
  

 render() {
    const { song } = this.props
    if (song === undefined) return null
    else {
      return (
        <>
          <SongIndexItemContainer songId={this.props.song.id}/>
        </>
      );
   }
  }
}
export default SongShow