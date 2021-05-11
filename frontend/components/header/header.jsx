import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let currentUser = this.props.currentUser;
    const { logout } = this.props
    const display = currentUser ? (
      <div>
        <p>Welcome, {currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    ) : (
      <div>
        <h1>Not logged in</h1>
        
        <Link className="btn" to="/signup">Sign Up</Link>
        <Link className="btn" to="/login">Log In</Link>
      </div>
    );

    return(
      <div>{display}</div>
    )
  }
}
export default Header