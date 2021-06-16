import React from 'react'
import { Redirect } from 'react-router-dom';

class SongEditForm extends React.Component {
  constructor(props){
    super(props)
    // debugger
    this.state = {
      ...props.song,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.updateimage = this.updateimage.bind(this);
  }

   update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[title]', this.state.title);
    formData.append('song[description]', this.state.description);
    formData.append('song[artistId]', this.state.artistId);
    formData.append('song[genre]', this.state.genre);
    if (this.state.imageFile) {
      formData.append('song[image]', this.state.imageFile);
    }
    if (this.state.audioFile) {
      formData.append('song[audio]', this.state.audioFile);
    }
    this.props.updateSong(formData, this.state.id)
    this.setState({submitted: true})
  }
  updateAudio(e, file){
    const reader = new FileReader();
    const audioID3 = {}
    if (file === undefined) {
      file = e.currentTarget.files[0];
    } 
    this.setState({fileName: file.name})
    jsmediatags.read(file, {
      onSuccess: tag => {
        
        Object.assign(audioID3, tag)
        this.setState({title: tag.tags.title})  
      },

    })

    reader.onloadend = () => {
      this.setState({ audioUrl: reader.result, audioFile: file });
 
    }
    
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ audioUrl: "", audioFile: null });
    }
    this.setState({formNum: 1})
  }

  updateimage(e, file){
    const reader = new FileReader();
    // 
    if (file === undefined){
      file = e.currentTarget.files[0];
    }
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }
  render() {
    // const { song } = this.props

    let dispImg 
    debugger
    if (this.state.imageUrl){
      dispImg = <img className="song-form-album-art" src={this.state.imageUrl} />
    } 
    else {
      dispImg = <div className="placeholder-album-art"/>
    }

    return (
      <>
        <div className="image-container">
          {dispImg}
          {/* <button className="change-image-btn">Upload Image</button> */}
          <label className="change-image-btn" >Upload image
            <input 
            type="file"
            id ="init-image-input"
            accept="image/*"
            className="init-image-input"
            onChange={(e) => this.updateimage(e)}
            />
          </label>
        </div>
        <input 
          type="file"
          accept='audio/*'
          onChange={(e) => this.updateAudio(e)}
        />

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
                  onChange={this.update('genre')}>
                    <option value={this.state.genre}>{this.state.genre}</option>
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
                
                {this.state.submitted ? <Redirect to={`/songs/${this.state.id}`}/> : null}
                <button className="song-submit-btn"
                type="submit" 
                onClick={this.handleSubmit}>  
                Submit
                </button>
          </div>
      </>
    )
  }
}

export default SongEditForm