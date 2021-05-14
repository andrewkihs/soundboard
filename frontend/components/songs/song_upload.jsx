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
    this.updateimage = this.updateimage.bind(this)
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

  updateimage(e){
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

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const formData = new FormData();
    // debugger
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
    debugger
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
    if (this.state.imageFile){
      dispImg = <img className="song-form-album-art" src={this.state.imageUrl} />
    } 
    else {
      dispImg = <div className="placeholder-album-art"/>
    }
    return (

    
      <div className="first-form-container">
        <div className="song-form-image-container">

          <div className="image-container">
            {dispImg}
            {/* <button className="change-image-btn">Upload Image</button> */}
            <label className="change-image-btn" 
            // for="init-image-input"
            >Upload image
              <input 
              type="file"
              id ="init-image-input"
              className="init-image-input"
              onChange={(e) => this.updateimage(e)}
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
              <textarea
                value={this.state.description}
                onChange={this.update('description')}
                className="songform-description"
                />
            </label>
            <label>Genre
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
            {/* <label className="image-button" for="init-image-input">
              <input 
              type="file"
              id ="init-image-input"
              className="init-image-input"
              onChange={(e) => this.updateimage(e)}
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