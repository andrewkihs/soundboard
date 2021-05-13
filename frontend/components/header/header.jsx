import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import {SearchIcon, NotifBell, Messages, MoreOptions } from '../icons'

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const { openModal } = this.props;

    // debugger
    const sessionLinks = () => (
    <nav className="login-signup">
      <button className="loginBtn" onClick={() => openModal('login')}>Sign In</button>
      <button className="signupBtn" onClick={() => openModal('signup')}>Create account</button>
    </nav>
  );

    let currentUser = this.props.currentUser;
    const { logout } = this.props
    const display = currentUser ? (
      <>
          <span className="header__right_ele">
            <Link to="/tryPro">Try Pro</Link>
          </span>
          <span>
            <Link to="/upload">Upload</Link>
          </span>
          <div className="userIcons">
            <div className="header__userNav">
              <div className="userDropDown">
                <img className="header__userImage"/>
                <span>{currentUser.display_name}</span>
                {/* User profile dropdown goes here */}
              </div>
            </div>
            <div className="header__userNotifications">
              {/* notification dropdown goes here */}
              <button>
                <Messages/>
              </button>
            </div>
            <div className="header__messages">
              {/* message dropdown goes here */}
              <button>
                <NotifBell/>
              </button>
            </div>
            <div className="header__settings">
              {/* message dropdown goes here */}
              <button>
                <MoreOptions/>             
              </button>
            </div>
          </div>
      </>
    ) : (

      // NOT LOGGED IN DISPLAY
      <>
        {sessionLinks()}
        <span>
          <Link to="/upload">Upload</Link>
        </span>
        <div className="userIcons">
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

              <span className="selected" id="selected">
                <Link to="/discover">Home</Link>
              </span>
              <span>
                <Link to="/stream">Stream</Link>
              </span>
              <span>
                <Link to="/you/library">Library</Link>
              </span>

          </div>
          <div className='header__middle'>
            {/* might have to become component? */}
            <form className="headerSearch">
              <input className="headerSearch__input" 
              placeholder="Search" 
              type="search"/>
            </form>
          </div>
          <div className='header__right'>
            {/* <div>
              <Link to="/tryPro">Try Pro</Link>
            </div>
            <div>
              <Link to="/upload">Upload</Link>
            </div>
            <div className="header__userNav">
              <div className="userDropDown">
                <img className="header__userImage"/>
                <span>Username goes here</span>
                {/* User profile dropdown goes here */}
              {/* </div> */}
            {/* </div>
            <div className="header__userNotifications">
              {/* notification dropdown goes here */}
              {/* <button>
                <Messages/>
              </button>
            </div>
            <div className="header__messages">
              {/* message dropdown goes here */}
              {/* <button>
                <NotifBell/>
              </button> */}
            {/* </div>  */}
            {display}
            {/* <div className="header__settings">
              {/* message dropdown goes here */}
              {/* <button>
                <MoreOptions/>             
              </button> */}
            {/* </div> */}
          </div>
        {/* <img width='100px' height='100px' src={window.logoURL} /> */}
      {/* {sessionLinks()} */}
      </div>
        <button onClick={logout}> lgt</button>
      </nav>
    )
  }
}
export default Header