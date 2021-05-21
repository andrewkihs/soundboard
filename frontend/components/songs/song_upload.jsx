import React from 'react'
import jsmediatags from 'jsmediatags'
import { Redirect, Link } from 'react-router'
// var jsmediatags = require("jsmediatags");
// TODO
// add back button on page 2
// 

class SongUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.song,
      formNum: 1,
      fileName: '',
      submitted: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateAudio = this.updateAudio.bind(this)
    this.updateimage = this.updateimage.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
    this.handleDragOver = this.handleDragOver.bind(this)
  }

  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
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
      onError: function(error) {
        console.log(':(', error.type, error.info);
      }
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

  handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('File dropped')
    const file = e.dataTransfer.files[0]
    // 
    if (file.type.includes('audio')){
      this.updateAudio(e, file)
    } else {
      // error handling for incorrect file type
    }
  }

  handleDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    // 
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
    // 
    this.props.createSong(formData)
    
    this.setState({submitted: true})
  }

  firstPage() {
    return (

      <div className="first-form-container">
        <h1 className="upload-title">Upload</h1>
        <h1 className="upload-title 2">Your tracks</h1>
        {/* <div className="above-drag-drop"></div> */}
        <div className="drag-drop-song-form" 
        onDropCapture={this.handleDrop}
        onDragOver={this.handleDragOver}
        >
          
          <div className='song-form-center-ele'>
            <h1> Drag and drop your tracks and albums here</h1>
            <input 
              type="file"
              accept='audio/*'
              onChange={(e) => this.updateAudio(e)}
              />
            <br/>
          </div>
        </div>
      </div>
    )
  }
  handleBack(){
    this.setState({formNum: 0})
  }
  secondPage() {
    // 
    let dispImg 
    if (this.state.imageFile){
      dispImg = <img className="song-form-album-art" src={this.state.imageUrl} />
    } 
    else {
      dispImg = <div className="placeholder-album-art"/>
    }
    return (

      <div className="large-second-form-container">
         <div className="first-form-container"></div>
        <div className="sf-replace-container">
          <div className="smaller">
            <div className='learn-more-audio'>
              <p>Provide FLAC, WAV, ALAC, or AIFF for highest audio quality. Learn more about lossless HD.</p>
              <button className="replace-file-btn"
              onClick={this.handleBack}
              >Replace file</button>
            </div>
          </div>
            <div className="song-progress-bar">
                <p className="filename"> {this.state.fileName}</p>
                <p className="ready-post"> Ready. Click Save to post this track.</p>
          </div>
          <div className="second-form-container">
            <div className="song-form-image-container">
              <div className="basic-info-banner">
                <h1 className="sf-basic-info">Basic Info</h1>
              </div>
              <div className="sf-center-content">
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
              </div>
          </div>
        </div>
        </div>
      </div>
      )
    }
  
  
  render(){
    // 
    if (this.state.formNum === 0){
      return(
      <div className="outer-song-form-container">
        <div className="song-form-container">
          {this.firstPage()}
        </div>
      </div>
      )
    }
    else if (this.state.formNum === 1){
      return (
        <div className="outer-song-form-container">
          {this.state.submitted? <Redirect to={`users/${this.state.artistId}`}/> : <></>}
          <div className="song-form-container">
            {this.secondPage()}
          </div>
        </div>
        )
    }
    return (<></>)
  }
}

export default SongUpload