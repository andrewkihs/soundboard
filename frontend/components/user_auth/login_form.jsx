import React from 'react';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formNum: 0,
      email: '',
      password: '',
      emailError: false,
      showEmailError: false, 
      showAuthError: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this)
    this.isValidEmail = this.isValidEmail.bind(this)
    this.handleDemoUser = this.handleDemoUser.bind(this)
    this.handleEnterClick = this.handleEnterClick.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
      () => {
        if(this.props.errors){
          //can dry this out 
          this.props.closeModal()
        }else{
          this.props.closeModal() 
        }
      }, )
    

  }

  validSubmit(){
    this.props.close(modal)
  }

  isValidEmail(email) {

    //regex pulled from https://www.w3resource.com/javascript/form/email-validation.php
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      return true
    } else {
      return false
    }
  }
  handleEnterClick = e => {
  
    if (e.key === 'Enter' ) {
      if (this.state.formNum === 0){
        this.handleEmail();
      }
      if (this.state.formNum ===1){
        this.handleSubmit(e)
      }
    }
  }

  handleEmail(){

    if (!this.isValidEmail(this.state.email)){
      this.setState({showEmailError: true})
    } else {
        return this.setState({formNum: 1})
    }
  }

  nextForm(num) {

    return e => {
      e.preventDefault;
      this.setState({formNum: num})
    }
  }

  handleDemoUser(e){
    const user = {email: 'demouser@gmail.com', password: 'password'}
    this.props.login(user).then(this.props.closeModal())
  }

  render() {

     if (this.state.formNum === 0){
      return (
        <div className="login-container">
          <div className="fake-auth-btns">

            <button className="demo-fb" onClick={this.handleDemoUser}>Continue with Demo User</button>
            <br/>
            <button className="demo-goog" onClick={this.handleDemoUser}>Continue with Demo User</button>
            <br/>
            <button className="demo-apple" onClick={this.handleDemoUser}>Continue with Demo User</button>
            <br/>
          </div>
          <div className="auth-method-separator">
            <span>or</span>
          </div>
          <br/>
          <h1 className='modal-title'>Login to your SoundBoard account</h1>
          <br/>
         
            <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="Your email address"
            onKeyPress={this.handleEnterClick}
            />
         
          <p className="modal-error">{this.state.showEmailError ? 'Please enter a valid email': ""}</p>
          <br/>
          <button 
          onClick={this.handleEmail} 
          className="continue-btn">Continue</button>


          <p className="form-boilerplate">We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.

We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.</p>
        </div>
      )
    }
    if (this.state.formNum === 1) {
      return (
        <div className="password-form-container">
          {/* <div className="p"> */}

          
          <button className="login-form-back-btn"
          onClick={this.nextForm(0)}>{this.state.email}</button>
          <br/>
          
          <input type="password"
            placeholder="Your Password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
            onKeyPress={this.handleEnterClick}
          />
          
          <br/>
          <ul className="modal-error">
            {Object.values(this.props.errors)}
        </ul>
          <br/>
          <button className="continue-btn" onClick={this.handleSubmit}>{'Sign in'}</button>
          <br/>
          {/* </div> */}
        </div>
      )
    }
  }
}

export default LogInForm;
