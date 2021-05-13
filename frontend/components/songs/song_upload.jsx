import React from 'react'


class SongUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.song
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
    formData.append('song[artist_id]', this.state.artist_id);
    if (this.state.photoFile) {
      formData.append('song[image]', this.state.photoFile);
    }
    if (this.state.audioFile) {
      formData.append('song[audio]', this.state.audioFile);
    }
    // debugger
    this.props.createSong(formData)
    // debugger
  }
  
  render(){
    // debugger
    return (
      <>
        <h1> Drag and drop your tracks and albums here</h1>
        <input 
          type="file"
          onChange={(e) => this.updateAudio(e)}
        />
        <br/>
        <label>Title
          <input 
            type="text"
            value={this.state.title}
            onChange={this.update('title')}
            className="songform-title"
          />
        </label>
        <br/>
        <label>
          <input 
            type="text"
            value={this.state.description}
            onChange={this.update('description')}
            className="songform-description"
          />
        </label>
        <label>Upload an image 
          <input 
          type="file"
          onChange={(e) => this.updatePhoto(e)}
        />
        </label>
          <br/>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </>
    )
  }
}

export default SongUpload