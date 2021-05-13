import React from 'react'
import ReactPlayer from 'react-player'

class SongShow extends React.Component{
  constructor(props){
    super(props)
  }
  

  componentDidMount(){
    this.props.fetchSong(this.props.songId)
  }
  parseAudio(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }
  blobToDataURL(blob, callback) {
  var fileReader = new FileReader();
  fileReader.onload = function(e) {callback(e.target.result);}
  fileReader.readAsDataURL(blob);
  
}
  render(){
    const { song } = this.props
    // debugger
    if (song === undefined){
      // still loading user info
      return (<></>)
    }else {
      // console.log(song.image_url instanceof Blob)
      // console.log(song.image_url)
      // const reader = new FileReader();
      console.log(song.song_url)
      console.log(song.title)
      console.log(song.description)
      return (
        
        <>
        {song.title instanceof Blob}
        {/* <ReactPlayer url={song.song_url} /> */}
        <audio>
          
          <source src={(song.song_url)}></source>
        </audio>
       
         {/* {song.title} */}
      </>
    )
    }
  }
}

export default SongShow