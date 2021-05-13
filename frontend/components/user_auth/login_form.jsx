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
      }, console.log('Error'))
    

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
        <>
          <div className="fakeAuthBtns">

            <button className="demoFB" onClick={this.handleDemoUser}>Continue with Demo User</button>
            <br/>
            <button className="demoGoog" onClick={this.handleDemoUser}>Continue with Demo User</button>
            <br/>
            <button className="demoApple" onClick={this.handleDemoUser}>Continue with Demo User</button>
            <br/>
          </div>
          <div className="auth-method-separator">
            <span>or</span>
          </div>
          <h1 className='modal-title'>Login to your SoundBoard account</h1>
          <br/>
         
            <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="Your email address"
            onKeyPress={this.handleEnterClick}
            />
         
          <p className="modal-error">{this.state.showEmailError ? 'Please Enter a valid email': ""}</p>
          <br/>
          <button onClick={this.handleEmail} >Continue</button>


          <p className="form-boilerplate">We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.

We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.</p>
        </>
      )
    }
    if (this.state.formNum === 1) {
      return (
        <>

          <button onClick={this.nextForm(0)}>{this.state.email}</button>
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
          <p>Don't know your password?</p>
          <br/>
          <button onClick={this.handleSubmit}>{'Sign in'}</button>
        </>
      )
    }
  }
}

export default LogInForm;
