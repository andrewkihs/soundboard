import React from 'react'
import SongIndexItemContainer from '../songs/song_index_item_container'
class EditProfile extends React.Component{
   constructor(props){
    super(props)
    this.state = {
      ...props.user
    }
    this.updateAvatarImage = this.updateAvatarImage.bind(this)
    this.updateHeaderImage = this.updateHeaderImage.bind(this)
  }

   update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateAvatarImage(e, file){
    const reader = new FileReader();
    if (file === undefined){
      file = e.currentTarget.files[0];
    }
    reader.onloadend = () =>
      this.setState({ avatarUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ avatarUrl: currentUser.avatarUrl, imageFile: null });
    }
  }

  updateHeaderImage(e, file){
    const reader = new FileReader();
    if (file === undefined){
      file = e.currentTarget.files[0];
    }
    reader.onloadend = () =>
      this.setState({ avatarUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ avatarUrl: currentUser.avatarUrl, imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[title]', this.state.title);
    formData.append('user[description]', this.state.description);
    formData.append('user[artistId]', this.state.artistId);
    formData.append('user[genre]', this.state.genre);
    if (this.state.imageFile) {
      formData.append('user[image]', this.state.imageFile);
    }
    if (this.state.audioFile) {
      formData.append('user[audio]', this.state.audioFile);
    }
    this.props.updateSong(formData, this.state.id)
    this.setState({submitted: true})
    this.props.closeModal();
  }
  componentDidMount(){
  }
  

  render(){
    debugger 

    let dispImg 
    // 
    // if (this.state.imageUrl){
    //   dispImg = <img className="song-form-album-art" src={this.state.imageUrl ? this.state.imageUrl : uploader.avatarUrl} />
    // } 
    // else {
    //   dispImg = <div className="placeholder-album-art"/>
    // }

    return (
      <>
        <div className="image-container">
          <img className="song-form-album-art" src={this.state.avatarUrl}/>
          {/* <button className="change-image-btn">Upload Image</button> */}
          <label className="change-image-btn" >Replace profile picture
            <input 
            type="file"
            id ="init-image-input"
            accept="image/*"
            className="init-image-input"
            onChange={(e) => this.updateAvatarImage(e)}
            />
          </label>
        </div>

         <div className="image-container">
          <img className="song-form-album-art" src={this.state.headerUrl}/>
          {/* <button className="change-image-btn">Upload Image</button> */}
          <label className="change-image-btn" >Replace header photo
            <input 
            type="file"
            id ="init-image-input"
            accept="image/*"
            className="init-image-input"
            onChange={(e) => this.updateHeaderImage(e)}
            />
          </label>

           <div className="edit-user-form-text-input-container">
  
                <label className="uf-title-label">Username
                  <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="edit-profile-username"
                    />
                </label>
                <br/>

                 <label className="uf-displayName-label">Display name
                  <input 
                    type="text"
                    value={this.state.displayName}
                    onChange={this.update('displayName')}
                    className="edit-profile-displayName"
                    />
                </label>
                <br/>

                <label className="uf-city-label">City
                  <input 
                    type="text"
                    value={this.state.city}
                    onChange={this.update('city')}
                    className="edit-profile-city"
                    />
                </label>
                <label className="uf-country-label">Country
                  <input 
                    type="text"
                    value={this.state.country}
                    onChange={this.update('country')}
                    className="edit-profile-country"
                    />
                </label>
                <br/>
                <label className="uf-firstName-label">First Name
                  <input 
                    type="text"
                    value={this.state.firstName}
                    onChange={this.update('firstName')}
                    className="edit-profile-firstName"
                    />
                </label>
                <label className="uf-lastName-label">Last Name
                  <input 
                    type="text"
                    value={this.state.lastName}
                    onChange={this.update('lastName')}
                    className="edit-profile-lastName"
                    />
                </label>
                <br/>
                <label className="uf-bio-label">Bio
                  <input 
                    type="textarea"
                    value={this.state.lastName}
                    onChange={this.update('bio')}
                    className="edit-profile-bio"
                    />
                </label>
            </div>
            <div className="update-profile-continue-btn">

                  <p className="edit-song-cancel-btn"
                    onClick={() => dispatch(closeModal())}>  
                    Cancel
                  </p>
                  <button className="edit-song-submit-btn"
                  type="submit" 
                  onClick={this.handleSubmit}>  
                  Update profile
                  </button>
            </div>
        </div>
        {/* </div> */}
      </>
    )
  }
}
export default EditProfile