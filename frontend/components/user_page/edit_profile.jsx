import React from 'react'
import SongIndexItemContainer from '../songs/song_index_item_container'
import { CameraIcon } from '../icons'
class EditProfile extends React.Component{
   constructor(props){
    super(props)
    Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );
    this.state = {
      ...Object.filter(props.user, value => value!='null' && value!='undefined')
    }
    this.updateAvatarImage = this.updateAvatarImage.bind(this)
    this.updateHeaderImage = this.updateHeaderImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
      this.setState({ avatarUrl: reader.result, avatarImageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ avatarUrl: currentUser.avatarUrl, avatarImageFile: null });
    }
  }

  updateHeaderImage(e, file){
    const reader = new FileReader();
    if (file === undefined){
      file = e.currentTarget.files[0];
    }
    reader.onloadend = () =>
      this.setState({ headerUrl: reader.result, headerImageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ headerUrl: currentUser.headerUrl, headerImageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[bio]', this.state.bio);
    formData.append('user[city]', this.state.city);
    formData.append('user[country]', this.state.country);
    formData.append('user[displayName]', this.state.displayName);
    formData.append('user[bio]', this.state.bio);
    formData.append('user[firstName]', this.state.firstName);
    formData.append('user[lastName]', this.state.lastName);
    if (this.state.avatarImageFile) {
      formData.append('user[avatar]', this.state.avatarImageFile);
    }
    if (this.state.headerImageFile) {
      formData.append('user[header]', this.state.headerImageFile);
    }
    this.props.updateUser(formData, this.state.id)
    this.setState({submitted: true})
    this.props.closeModal();
  }
  

  render(){

    let dispImg 

    return (
      <>
       <div className="user-show-page">
          <div className="user-show-top">
            <div className="header-photo-container">
               <div className="us-header-left">

                <div className="profile-pic-container">
                  <img className="edit-profile-avatar" src={this.state.avatarUrl}/>
                  <label className="change-user-image-btn pfp" > <CameraIcon/> <p>Update image</p>
                    <input 
                    type="file"
                    accept="image/*"
                    className="edit-profile-image-input"
                    onChange={(e) => this.updateAvatarImage(e)}
                  />
                </label>
                </div>
              </div>
              <img className="edit-profile-header" src={this.state.headerUrl}/>
            <label className="change-user-image-btn header-btn" > <CameraIcon/><p>Update image</p>
              <input 
              type="file"
              accept="image/*"
              className="edit-profile-image-input"
              onChange={(e) => this.updateHeaderImage(e)}
              />
            </label>
            </div>
          </div>
        </div>
        <div className="user-form-large-container">
          
          <div className='edit-profile-h1'>
            <h1 className='edit-profile'>Edit Profile</h1>
          </div>
           <div className="edit-user-form-text-input-container">
              <div className='user-form-disp-names'>
    

                <label className="uf-displayName-label">Display name</label>
                <input 
                  type="text"
                  value={this.state.displayName}
                  onChange={this.update('displayName')}
                  className="edit-profile-displayName"
                />
              </div>

              <div className='uf-fName'>
                <label className="uf-firstName-label">
                  First Name
                  <br/>
                </label>
                <input 
                  type="text"
                  value={this.state.firstName}
                  onChange={this.update('firstName')}
                  className="edit-profile-firstName"
                />
              </div>
              <div className='uf-lName'>
              <label className="uf-lastName-label">Last Name
                <br/>
              </label>
                <input 
                  type="text"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  className="edit-profile-lastName"
                />
              </div>
              <div className='uf-city'>
                <label className="uf-city-label">City
                  <br/>
                  <input 
                    type="text"
                    value={this.state.city}
                    onChange={this.update('city')}
                    className="edit-profile-city"
                  />
                </label>
              </div>
              <div className='uf-country'>
                <label className="uf-country-label">Country
                <br/>
                  <input 
                    type="text"
                    value={this.state.country}
                    onChange={this.update('country')}
                    className="edit-profile-country"
                  />
                </label>
              </div>

              <div className='uf-bio'>
                <label className="uf-bio-label">Bio</label>
                <br/>
                  <textarea
                    type="textarea"
                    value={this.state.bio}
                    onChange={this.update('bio')}
                    className="edit-profile-bio"
                  />
              </div>
            </div>

            <div className="update-profile-continue-btn">
              <p className="edit-song-cancel-btn"
                onClick={() => this.props.closeModal()}
                >  
                Cancel
              </p>
              <button className="edit-song-submit-btn"
              type="submit" 
              onClick={this.handleSubmit}>  
                Update profile
              </button>
            </div>
        </div>
      </>
    )
  }
}

export default EditProfile