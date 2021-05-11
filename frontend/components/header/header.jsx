import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    const { openModal } = this.props;


    const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Login</button>
      &nbsp;or&nbsp;
      <button onClick={() => openModal('signup')}>Signup</button>
    </nav>
  );


    let currentUser = this.props.currentUser;
    const { logout } = this.props
    const display = currentUser ? (
      <div>
        <p>Welcome, {currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    ) : (

      // NOT LOGGED IN DISPLAY
      <div>
        <h1>Not logged in</h1>
        {sessionLinks()}
      </div>
    );
    
    return(
      <nav className='full_header'>
        <nav className='header__left'>
          <ul>
            <li>
              <a ></a>
            </li>
          </ul>
        </nav>
        <img width='100px' height='100px' src={window.logoURL} />
        {display}
      {/* {sessionLinks()} */}
      
      </nav>
    )
  }
}
export default Header