import React from 'react'
import GridIndexItemContainer from './grid_index_item_container'
class Grid extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      play: false,
      pause: true,
      song: props.song,

    }
    // 
    // this.url = props.song.audioUrl;
    // this.audio = new Audio(this.state.songUrl);
    this.play = this.play.bind(this)
  }
  
  play = () => {
  // this.setState({ play: true, pause: false })
  //   this.state.audioPlayer.play();
    // 
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
    // 
    if (song === undefined){
      return (<></>)
    } 
    else {
      // 
      return (
        <>
          <GridIndexItemContainer songId={this.props.song.id}/>
        </>
      );
   }
  }
}
export default Grid