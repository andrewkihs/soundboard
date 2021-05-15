import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import {SearchIcon, NotifBell, Messages, MoreOptions } from '../icons'
import SongUploadContainer from '../songs/song_upload_container'
class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      settingsDrop: false,
      messageDrop: false,
      notifDrop: false,
      // currPath: this.props.currPath
    }
    // debugger
    // console.log(this.props.currPath)
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
   
    if (currClass === 'settings-btn'){
      this.setState({settingsDrop: true})
    }
    if (currClass === 'message-btn'){
      this.setState({messageDrop: true})
    }
    if (currClass === 'notif-btn'){
      this.setState({notifDrop: true})
    }
  }
  

  leave(e) {
    const currClass = e.currentTarget.className;
    if (currClass === 'settings-btn'){
      this.setState({settingsDrop: false})
    }
    if (currClass === 'message-btn'){
      this.setState({messageDrop: false})
    }
    if (currClass === 'notif-btn'){
      this.setState({notifDrop: false})
    }
  }
  render() {
    // debugger
    const { openModal } = this.props;

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

    let currentUser = this.props.currentUser;
    const { logout } = this.props
    const display = currentUser ? (
      <>
        <Link 
          onFocus={this.handleTabClick} 
          onBlur={this.leaveTab} 
          className="header-box"
          to="/tryPro">Try Pro
          <span />
        </Link>
        <Link 
          onFocus={this.handleTabClick} 
          onBlur={this.leaveTab} 
          className="header-box"
          to="/upload" >Upload
        <span />
        </Link>
        <div className="user-icons">
          <div className="header__user-nav">
            <div className="user-drop-down">
              <img className="header__userImage"/>
              <span>{currentUser.displayName}</span>
              {/* User profile dropdown goes here */}
            </div>
          </div>
          <div className="message-btn-container">
            {/* notification dropdown goes here */}
            <button className="message-btn" onFocus={this.handleSettingsClick} onBlur={this.leave}>
              <Messages/>
              <ul id="message-dropdown" className={this.state.messageDrop? 'reveal' : 'hide'}>
                <li>Message dropdown</li>
                <li> Dropdown content 2</li>
              </ul>
            </button>
          </div>
          <div className="notif-btn-container">
            {/* message dropdown goes here */}
            <button className="notif-btn" onFocus={this.handleSettingsClick} onBlur={this.leave}>
              <NotifBell/>
              <ul id="notif-dropdown" className={this.state.notifDrop ? 'reveal' : 'hide'}>
                <li>Notif dropdown</li>
                <li> Dropdown content 2</li>
              </ul>
            </button>
          </div>
          <div className="settings-btn-container">
            <button className="settings-btn" onFocus={this.handleSettingsClick} onBlur={this.leave}> 
              <MoreOptions/>   
              <ul id="settings-dropdown" className={this.state.settingsDrop ? 'reveal' : 'hide'}>
                <li>Settings dropdown</li>
                <li> Dropdown content 2</li>
              </ul>
            </button>
          </div>
              {/* </span> */}
        </div>
      </>
    ) : (

      // NOT LOGGED IN DISPLAY
      <>
        {sessionLinks()}
          <Link 
            onFocus={this.handleTabClick} 
            onBlur={this.leaveTab} 
            className="header-box" 
            to="/upload">Upload
            <span/>
          </Link>
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
              {/* </span> */}

          </div>
          <div className='header__middle'>
            <form className="headerSearch">
              <input className="headerSearch__input" 
              placeholder="Search" 
              type="search"/>
            </form>
          </div>
          <div className='header__right'>
            {display}          
          </div>
      </div>
        <button onClick={logout}> lgt</button>
      </nav>
    )
  }
}
export default Header