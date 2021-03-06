import React from 'react';
import { closeModal } from '../../actions/modal_actions';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formNum: 0,
      username: '',
      password: '',
      age: '',
      gender: '',
      displayName: '',
      email: '',
      emailError: false,
      showEmailError: false,      
      ageError: false,
      showPasswordError: false,
      showGenderError: false,
      showAgeError: false,
      avatarFile: null,
      avatarURL: null,
      showDisplayNameEror: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateRandomUsername = this.generateRandomUsername.bind(this)
    this.handleDemoUser = this.handleDemoUser.bind(this)
    this.isValidEmail = this.isValidEmail.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleAgeAndGender = this.handleAgeAndGender.bind(this)
    this.handleDisplayName = this.handleDisplayName.bind(this)
    this.handleEnterClick = this.handleEnterClick.bind(this)

  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSubmit(e) {
    const user = Object.assign({}, this.state);
    this.props.closeModal()
    this.props.processForm(user);
  }

  componentDidMount(){
    const randUsername = this.generateRandomUsername()
    this.setState({username: randUsername})
  }

  generateRandomUsername() {
    const randNum = String(Math.floor(Math.random() * 1000000000))
    const randName = ('user-'.concat(randNum));
    return randName
  }

  nextForm(num) {

    return e => {
      e.preventDefault;
      this.setState({formNum: num})
    }
  }
  
  ageErrors() {
    if (this.state.age > 12) {
      return false;
    } else {
      return true
    }    
  }
  isValidEmail(email) {

    //regex pulled from https://www.w3resource.com/javascript/form/email-validation.php
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      return true
    } else {
      return false
    }
  }

  handleEmail(){
    if (!this.isValidEmail(this.state.email)){
      this.setState({showEmailError: true})
    } else {
        return this.setState({formNum: 1})
    }
  }

  handlePassword(){
    if (this.state.password.length < 6){
      // password too short
      return this.setState({showPasswordError: true})
    } else {
      return this.setState({formNum: 2})
    }
  }


  handleAgeAndGender(){
    if (this.state.age < 13){
      return this.setState({showAgeError: true})
    } else {
      this.setState({showAgeError: false})
    }
    if (this.state.gender === 'Indicate your Gender'){
      return this.setState({showGenderError: true})
    } else if (this.state.gender === ''){
      return this.setState({showGenderError: true})
    } 
    if (this.state.age > 13 && this.state.gender !== 'Indicate your Gender'){
      return this.setState({formNum: 3})
    }
    // return 
  }

  handleDisplayName(){
    if (this.state.displayName === ''){
      return this.setState({showDisplayNameEror: true})
    } else {
      this.handleSubmit();
    }
  }

  handleEnterClick = e => {
    if (e.key === 'Enter' ) {
      if (this.state.formNum === 0){
        this.handleEmail();
      }
      if(this.state.formNum === 1){
        this.handlePassword();
      }
      if(this.state.formNum === 2){
        this.handleAgeAndGender();
      }
      if(this.state.formNum === 3){
        this.handleDisplayName();
      }
    }
  };
  
  handleDemoUser(e){
    const user = {email: 'demouser@gmail.com', password: 'password'}
    this.props.login(user).then(this.props.closeModal())
  }
  
  render() {
    if (this.state.formNum === 0){
      return (
        <>
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
          <h1 className='modal-title'>Create your SoundBoard account</h1>
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
          <button 
          onClick={this.handleEmail} 
          className="continue-btn">Continue</button>


          <p className="form-boilerplate">We won't use your email and devices for updates and tips on SoundBoard's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.

We won't use information you provide us in order to show you targeted ads as described in our non-existent Privacy Policy.</p>
        </>
      )
    }

    if (this.state.formNum === 1) {
      return (

        <div className="password-form-container">
          <button className="login-form-back-btn"
          onClick={this.nextForm(0)}>{this.state.email}</button>
          <br/>
          <label>Choose a password</label>
          <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              onKeyPress={this.handleEnterClick}
            />
          <br/>
          <p className="modal-error">{this.state.showPasswordError ? 'Password must be longer than 6 characters': ""}</p>
          <p className="gender-age-text">By signing up I accept the Terms of use. I have read and understood the Privacy Policy and Cookies Policy</p>
          <br/>
          <button className="continue-btn" onClick={this.handlePassword}>{'Accept & continue'}</button>
        </div>
      )
    }

    if (this.state.formNum === 2) {
      return (
        <>
        <h1 className="signup-create-text">Create your SoundBoard account</h1>
          <br/>
          <label className="gender-age-text">Tell us your age</label>
            <input type="number"
              value={this.state.age}
              onChange={this.update('age')}
              onKeyPress={this.handleEnterClick}
              className="login-input"
            />
            <br/>
          <p className="modal-error">{this.state.showAgeError ? "Sorry, but you don't meet SoundBoard's age requirements": ""}</p>
          <br/>
          <label className="gender-age-text">Gender</label>
            <select 
            className="gender-dropdown"
            onChange={this.update('gender')} 
            onKeyPress={this.handleEnterClick}
            defaultValue="Indicate your gender">
              <option value="">Indicate your Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          <br/>
          <p className="modal-error">{this.state.showGenderError ? "Please indicate your gender": ""}</p>
          <button className="continue-btn"onClick={() => this.handleAgeAndGender()}>{'Continue'}</button>
        </>
      )
    }


    if (this.state.formNum === 3){
      return (
        <>
          <h1 className='signup-tellus-text'>Tell us a bit about yourself</h1>
          <br/>
          <label className="gender-age-text">Choose your display name</label>
          <input type="text"
          value={this.state.displayName}
          onChange={this.update('displayName')}
          onKeyPress={this.handleEnterClick}
          className="login-input"
          />
          <br/>
          <p className="modal-error">{this.state.showDisplayNameEror? 'Display name cannot be blank': ""}</p>
          <p className='gender-age-text'>Your display name can be anything you like. Your name or artist name are good choices</p>
          <br/>
         
           <br/>
          
          <button className='continue-btn' onClick={this.handleDisplayName}>Get Started</button>
        </>
      )
    }
  }
}

export default SignUpForm;
