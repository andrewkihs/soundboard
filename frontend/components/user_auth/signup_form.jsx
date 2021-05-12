import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formNum: 0,
      username: '',
      password: '',
      age: '',
      gender: '',
      display_name: '',
      email: '',
      emailError: false,
      showEmailError: false,      
      ageError: false,
      showPasswordError: false,
      showGenderError: false,
      showAgeError: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateRandomUsername = this.generateRandomUsername.bind(this)
    this.handleDemo = this.handleDemo.bind(this)
    this.isValidEmail = this.isValidEmail.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleAgeAndGender = this.handleAgeAndGender.bind(this)
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.closeModal()
    this.props.processForm(user);
    // console.log(user)
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
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
      return true
    }
    // alert("You have entered an invalid email address!")
    return false
  }

  handleEmail(){
  
    if (!this.isValidEmail(this.state.email)){
  
      this.setState({showEmailError: true})
    } else {
        return this.setState({formNum: 1})
    }
  }

  handlePassword(){
    // debugger
    if (this.state.password.length < 6){
      //bad password
      return this.setState({showPasswordError: true})
    } else {
      return this.setState({formNum: 2})
    }
  }

  handleDemo(e){
    this.setState({username: 'DemoUser', password: 'password'})
  }

  handleAgeAndGender(){
    // this.setState({showGenderError: false, showAgeError: false})
    if (this.state.age < 13){
      return this.setState({showAgeError: true})
    } else {
      this.setState({showAgeError: false})
    }
    // debugger
    if (this.state.gender === 'Indicate your Gender'){
      return this.setState({showGenderError: true})
    } else if (this.state.gender === ''){
      return this.setState({showGenderError: true})
    } else {
      this.setState({showGenderError: false})
    }
    if (this.state.showGenderError == false && this.state.showAgeError == false){
      // debugger
      return this.setState({formNum: 3})
    }
    return 
  }

  render() {
    if (this.state.formNum === 0){
      return (
        <>
          <div className="fakeAuthBtn">

            <button className="demoFB">Continue with Demo User</button>
            <br/>
            <button className="demoGoog">Continue with Demo User</button>
            <br/>
            <button className="demoApple">Continue with Demo User</button>
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
            placeholder="Email"
            />
         
          <p>{this.state.showEmailError ? 'Please Enter a valid email': ""}</p>
          <br/>
          <button onClick={this.handleEmail}>Continue</button>


          <p className="form-boilerplate">We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.

We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.</p>
        </>
      )
    }

    if (this.state.formNum === 1) {
      return (
        <>
          {/* <button onClick={this.nextForm(0)}>{this.state.email}</button> */}
          <br/>
          <label>Choose a password
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          <br/>
          <p>{this.state.showPasswordError ? 'Password must be longer than 6 characters': ""}</p>
          <p>By signing up I accept the Terms of use. I have read and understood the Privacy Policy and Cookies Policy</p>
          <br/>
          <button onClick={this.handlePassword}>{'Accept & continue'}</button>
        </>
      )
    }

    if (this.state.formNum === 2) {
      return (
        <>
          <br/>
          <label>Tell us your age
            <input type="number"
              value={this.state.age}
              onChange={this.update('age')}
              className="login-input"
            />
            {/* on Error Sorry, but you don't meet SoundBoard's age requirements*/}
          </label>
          <p>{this.state.showAgeError ? "Sorry, but you don't meet SoundBoard's age requirements": ""}</p>
          <br/>
          <label>Gender
            <select onChange={this.update('gender')} defaultValue="Indicate your gender">
              <option value="">Indicate your Gender</option>
              <option value>Female</option>
              <option value>Male</option>
              <option value>Prefer not to say</option>
            </select>
    
          </label>
          <p>{this.state.showGenderError ? "Please indicate your gender": ""}</p>
          <button onClick={this.handleAgeAndGender}>{'Accept & continue'}</button>
        </>
      )
    }


    if (this.state.formNum === 3){
      return (
        <>
          <h1>Tell us a bit about yourself</h1>
          <br/>
          <label>Choose your display name
            <input type="text"
            value={this.state.display_name}
            onChange={this.update('display_name')}
            className="login-input"
            />
          </label>
          <br/>
          <p>Your display name can be anyting you like. Your name or artist name are good choices</p>
          <br/>
         
           <br/>
          
          <button onClick={this.handleSubmit}>Get Started</button>
        </>
      )
    }
  }
}

export default SignUpForm;
