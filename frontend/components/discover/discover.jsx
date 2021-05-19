import React from 'react'

class Discover extends React.Component{
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
    this.props.fetchSongs()
  }
  

 render() {
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
          <ul className="discover-ul">
            hello
          {/* {Object.keys(this.props.songs).map((key, i) =>{
            return <SongIndexItemContainer key={i} songId={key}/>
          })} */}
          </ul>
        </>
      )

    }
  }
}
export default Discover