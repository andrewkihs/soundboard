import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import {SearchIcon, NotifBell, Messages, MoreOptions } from '../icons'
import SongUploadContainer from '../songs/song_upload_container'
import SearchContainer from '../search/search_container'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      settingsDrop: false,
      messageDrop: false,
      notifDrop: false,
      userDrop: false,
      logOutFlag: false,
    }
  
    this.handleSettingsClick = this.handleSettingsClick.bind(this)
    this.leave = this.leave.bind(this)
    this.handleTabClick = this.handleTabClick.bind(this)
    this.leaveTab = this.leaveTab.bind(this)
  }

  handleTabClick(e){
    const currEle = e.currentTarget;
    currEle.classList.add("selected")
   
  }

  leaveTab(e){
    const currEle = e.currentTarget;
    currEle.classList.remove("selected")
  }

  handleSettingsClick(e) {
    const currClass = e.currentTarget.className;
    const currEle = e.currentTarget
    
    currEle.classList.add("selected")
    if (currClass === 'user-drop-down'){
      this.setState({userDrop: true})
    }
    if (currClass === 'settings-btn-container'){
      this.setState({settingsDrop: true})
    }
    else if (currClass === 'message-btn-container'){
      this.setState({messageDrop: true})
    }
    else if (currClass === 'notif-btn-container'){
      this.setState({notifDrop: true})
    }
  }
  

  leave(e) {
    const currClass = e.currentTarget.className;
    const currEle = e.currentTarget;
    currEle.classList.remove("selected")
    if (currClass === 'user-drop-down selected'){
      this.setState({userDrop: false})
    }
    if (currClass === 'settings-btn-container selected'){
      this.setState({settingsDrop: false})
    }
    if (currClass === 'message-btn-container selected'){
      this.setState({messageDrop: false})
    }
    if (currClass === 'notif-btn-container selected'){
      this.setState({notifDrop: false})
    }
  }

  handleLogout(){
    this.props.logout().then(
      ()=>{
        this.setState({settingsDrop: false})
        window.location.hash = '/';
      }

    );

  }

  render() {
    const { openModal, currentUser } = this.props;
    const sessionLinks = () => (
      <nav className="login-signup">
        <button 
          className="loginBtn" 
          onClick={() => openModal('login')}>
            Sign In
        </button>
        <button 
          className="signupBtn" 
          onClick={() => openModal('signup')}
          >
            Create account
        </button>
      </nav>
    );

    const display = currentUser ? (
      <>
        <div>
        <a 
        target="_blank" 
        className="header-box-right"
        href="https://github.com/andrewkihs">GitHub
        <span />
        </a>
        <Link 
          onFocus={this.handleTabClick} 
          onBlur={this.leaveTab} 
          className="header-box-right"
          to="/upload" >Upload
        <span />
        </Link>
        </div>
        <div className="user-icons">
          <div className="header__user-nav">
            <div className="user-drop-down" onFocus={this.handleSettingsClick} onBlur={this.leave}>
              <img className="header__user-image" src={currentUser.avatarUrl}/>
        
                  <Link to={`/users/${currentUser.id}`}>
                <h1 className="header-display-name">
                  {currentUser.displayName}
                </h1 >
                  </Link>
                
            </div>
          </div>
          <div className="message-btn-container">
            <button className="message-btn">
              <a 
                target="_blank" 
                className="header-box-right"
                href="https://www.linkedin.com/in/andrew-kihs/">
                  <img className='header-icon-logo' src={window.linkedInLogo}/>
              </a>
            </button>
          </div>
          <div className="notif-btn-container" >
            <button className="notif-btn">
              <a 
                target="_blank" 
                className="header-box-right"
                href="https://www.linkedin.com/in/andrew-kihs/">
                  <img className='header-icon-logo' src={window.angelListLogo}/>

                </a>
            </button>
          </div>
          <div className="settings-btn-container" onFocus={this.handleSettingsClick} onBlur={this.leave}>
            <button className="settings-btn" onFocus={this.handleSettingsClick} onBlur={this.leave}> 
              <MoreOptions/>   
              <ul id="settings-dropdown" className={this.state.settingsDrop ? 'reveal' : 'hide'}>
                <li>Settings dropdown</li>
                <li><a onClick={() => this.handleLogout()}>Logout</a></li>
              </ul>
            </button>
          </div>
        </div>
      </>
    ) : (

      // NOT LOGGED IN DISPLAY
      <>
        {sessionLinks()}
        <div>

          <Link 
            onFocus={this.handleTabClick} 
            onBlur={this.leaveTab} 
            className="header-box-right" 
            to="/upload">Upload
            <span/>
          </Link>
        </div>
        <div className="user-icons">
          <div>

            <button>
              <MoreOptions/>             
            </button>
          </div>
        </div>
      </>
    );
    
    return(
      <nav className='full_header'>
        <div className="header__innerContainer">
          <div className='header__left'>
            <img className="headerLogo"src={window.logoURL} />

                <Link 
                  onFocus={this.handleTabClick} 
                  onBlur={this.leaveTab} 
                  className="header-box" 
                  to="/discover">Home
                    <span className="selected" id="selected"/>         
                </Link>
                <Link 
                  onFocus={this.handleTabClick} 
                  onBlur={this.leaveTab} 
                  className="header-box" 
                  to="/stream">Stream
                  <span/>
                </Link>
                <Link 
                  onFocus={this.handleTabClick} 
                  onBlur={this.leaveTab} 
                  className="header-box" 
                  to="/you/library">Library
                  <span/>
                </Link>

          </div>
          <div className='header__middle'>
            <form className="headerSearch">
              {/* <input className="headerSearch__input" 
              placeholder="Search" 
              type="search"/> */}
              <SearchContainer location='header'/>
            </form>
          </div>
          <div className='header__right'>
            {display}          
          </div>
      </div>
      </nav>
    )
  }
}
export default Header