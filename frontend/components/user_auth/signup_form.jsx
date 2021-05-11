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
      ageError: false,
      genderError: false,
      

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.generateRandomUsername = this.generateRandomUsername.bind(this)
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

  render() {
    
    if (this.state.formNum === 0){
      return (
        <>
        <h1>Create your SoundBoard account</h1>
        <br/>
        <label>Email:
          <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
          />
        </label>
        <br/>
        <button onClick={this.nextForm(1)}>Continue</button>
        </>
      )
    }

    if (this.state.formNum === 1) {
      return (
        <>
          <button onClick={this.nextForm(0)}>{this.state.email}</button>
          <br/>
          <label>Choose a password
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          <br/>
       
          <p>By signing up I accept the Terms of use. I have read and understood the Privacy Policy and Cookies Policy</p>
          <br/>
          <button onClick={this.nextForm(2)}>{'Accept & continue'}</button>
        </>
      )
    }

    if (this.state.formNum === 2) {
      return (
        <>
          <button onClick={this.nextForm(0)}>{this.state.email}</button>
          <br/>
          <label>Tell us your age
            <input type="number"
              value={this.state.age}
              onChange={this.update('age')}
              className="login-input"
            />
            {/* on Error Sorry, but you don't meet SoundBoard's age requirements*/}
          </label>
          <br/>
          <label>Gender
            <select onChange={this.update('gender')} defaultValue="Indicate your gender">
              <option value="">Indicate your Gender</option>
              <option value>Female</option>
              <option value>Male</option>
              <option value>Prefer not to say</option>
            </select>
    
            {/* <input type="text"
              value={this.state.age}
              onChange={this.update('age')}
              className="login-input"
            /> */}
            {/* {if this.state.custom} */}
            {/* on Error: Please indicate your gender */}
          </label>
          <button onClick={this.nextForm(3)}>{'Accept & continue'}</button>
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
