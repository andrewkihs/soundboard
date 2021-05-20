import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import "@brainhubeu/react-carousel/lib/style.css";

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
      // debugger
      return(
        <>
         <Carousel itemWidth={100} plugins={['arrows']}>
           {Object.keys(this.props.songs).map((song, i) =>{
             console.log(songs[song].imageUrl)
             return (<img key={i} width="100px" height="100px" src={songs[song].imageUrl}/>)
            })}
         </Carousel>

        

          {/* {Object.keys(this.props.songs).map((key, i) =>{
            return <SongIndexItemContainer key={i} songId={key}/>
          })} */}

        </>
      )

    }
  }
}
export default Discover