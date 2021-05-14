import React from 'react'


class Playhead extends React.Component {
  constructor(props){
    super(props)
  }
  debugger
  render(){
    const { currentSong } = this.props
    if (!currentSong) {
      return (
        <>
          No current song
        </>
      )
    }
    else{

      return (
        <>
          <div className="playhead-title">Currently playing.. {currentSong.title}</div>
        </>
      )
    }
  }
}
export default Playhead