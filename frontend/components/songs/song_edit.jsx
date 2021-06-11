import React from 'react'
import SongIndexItemContainer from './song_index_item_container'
class SongEdit extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // play = () => {
 
  //   this.props.setCurrentSong(this.props.song)
  // }
  
  // pause = () => {
  // this.setState({ play: false, pause: true })
  //   this.state.audioPlayer.pause();
  // }

  componentDidMount(){
    debugger
    this.props.fetchSong(this.props.songId)
  }
  

 render() {
    const { song } = this.props
    // 
    if (song === undefined) return null
    else {
      debugger
      return (
        <>
        <div className="song-form-text-input-container">
                <label className="sf-title-label">Title
                <input 
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="songform-title"
                  />
                </label>
      
                <label>Genre
                  <br/>
                  <select 
                  onChange={this.update('genre')}
                  defaultValue="None">
                    <option value="None">None</option>
                      <optgroup label="Music">
                        <option value="Alternative Rock">Alternative Rock</option>
                        <option value="Ambient">Ambient</option>
                        <option value="Classical">Classical</option>
                        <option value="Country">Country</option>
                        <option value={`Dance & EDM`}>{`Dance & EDM`}</option>
                        <option value="Dancehall">Dancehall</option>
                        <option value="Deep House">Deep House</option>
                        <option value="Disco">Disco</option>
                        <option value={`Drum & Bass`}>{`Drum & Bass`}</option>
                        <option value={`Dubstep`}>{`Dubstep`}</option>
                        <option value={`Electronic`}>{`Electronic`}</option>
                        <option value={`Folk & Singer-Songwriter`}>{`Folk & Singer-Songwriter`}</option>
                        <option value={`Hip-hop & Rap`}>{`Hip-hop & Rap`}</option>
                        <option value={`House`}>{`House`}</option>
                        <option value={`Indie`}>{`Indie`}</option>
                        <option value={`Jazz & Blues`}>{`Jazz & Blues`}</option>
                        <option value={`Latin`}>{`Latin`}</option>
                        <option value={`Metal`}>{`Metal`}</option>
                        <option value={`Piano`}>{`Piano`}</option>
                        <option value={`Pop`}>{`Pop`}</option>
                        <option value={`R&B & Soul`}>{`R&B & Soul`}</option>
                        <option value={`Reggae`}>{`Reggae`}</option>
                        <option value={`Reggaeton`}>{`Reggaeton`}</option>
                        <option value={`Rock`}>{`Rock`}</option>
                        <option value={`Soundtrack`}>{`Soundtrack`}</option>
                        <option value={`Techno`}>{`Techno`}</option>
                        <option value={`Trance`}>{`Trance`}</option>
                        <option value={`Trap`}>{`Trap`}</option>
                        <option value={`Triphop`}>{`Triphop`}</option>
                        <option value={`World`}>{`World`}</option>
                      </optgroup>
                      <optgroup label="Audio">
                        <option value={`Audiobooks`}>{`Audiobooks`}</option>
                        <option value={`Business`}>{`Business`}</option>
                        <option value={`Comedy`}>{`Comedy`}</option>
                        <option value={`Entertainment`}>{`Entertainment`}</option>
                        <option value={`Learning`}>{`Learning`}</option>
                        <option value={`News & Politics`}>{`News & Politics`}</option>
                        <option value={`Religion & Spirituality}`}>{`Religion & Spirituality`}</option>
                        <option value={`Science`}>{`Science`}</option>
                        <option value={`Sports`}>{`Sports`}</option>
                        <option value={`Storytelling`}>{`Storytelling`}</option>
                        <option value={`Technology`}>{`Technology`}</option>
                      </optgroup>
                    </select>
                  </label>
                  <br/>
                  <label>Description
                    <br/>
                    <textarea
                      value={this.state.description}
                      onChange={this.update('description')}
                      className="song-form-description"
                      />
                  </label>
                <br/>
                
              
                <button className="song-submit-btn"
                type="submit" 
                onClick={this.handleSubmit}>  
                Submit
                </button>
              </div>

        </>
      );
   }
  }
}
export default SongEdit