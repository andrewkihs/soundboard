import React from 'react'


class SongUpload extends React.Component {
  constructor(props) {
    super(props)
    // song = this.props.song
    this.state = {
      ...props.song,
      formNum: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateAudio = this.updateAudio.bind(this)
    this.updatePhoto = this.updatePhoto.bind(this)
  }

  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateAudio(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ audioUrl: reader.result, audioFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ audioUrl: "", audioFile: null });
    }
    this.setState({formNum: 1})
  }

  updatePhoto(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ photoUrl: reader.result, photoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const formData = new FormData();
    // debugger
    formData.append('song[title]', this.state.title);
    formData.append('song[description]', this.state.description);
    formData.append('song[artist_id]', this.state.artistId);
    if (this.state.photo_file) {
      formData.append('song[image]', this.state.photo_file);
    }
    if (this.state.audio_file) {
      formData.append('song[audio]', this.state.audio_file);
    }
    // debugger
    this.props.createSong(formData)
    // debugger
  }

  firstPage() {
    return (

      <div className="first-form-container">
        <div className="drag-drop-song-form">

          <div className='song-form-center-ele'>
            <h1> Drag and drop your tracks and albums here</h1>
            <input 
              type="file"
              onChange={(e) => this.updateAudio(e)}
              />
            <br/>
          </div>
        </div>
      </div>
    )
  }

  secondPage() {
    // debugger
    let dispImg 
    if (this.state.photoFile){
      dispImg = <img className="song-form-album-art" src={this.state.photoUrl} />
    } 
    else {
      dispImg = <div className="placeholder-album-art"/>
    }
    return (

    
      <div className="first-form-container">
        <div className="song-form-photo-container">

          <div className="image-container">
            {dispImg}
            {/* <button className="change-photo-btn">Upload Image</button> */}
            <label className="change-photo-btn" 
            // for="init-photo-input"
            >Upload image
              <input 
              type="file"
              id ="init-photo-input"
              className="init-photo-input"
              onChange={(e) => this.updatePhoto(e)}
              />
            </label>
          </div>

          <div className="song-form-text-input-container">
            <label>Title
            <input 
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
              className="songform-title"
              />
            </label>
            <br/>
            <label>Description
              <input 
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="songform-description"
                />
            </label>
            {/* <label className="photo-button" for="init-photo-input">
              <input 
              type="file"
              id ="init-photo-input"
              className="init-photo-input"
              onChange={(e) => this.updatePhoto(e)}
              />
            </label> */}
            <br/>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
      )
    }
  
  
  render(){
    // debugger
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