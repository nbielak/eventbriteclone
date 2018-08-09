import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({email: this.props.email})
  }

  update(field) {
    return e => {
        this.setState({[field]: e.target.value})
    };
  }

  handleSubmit(e) {
    this.props.signup(this.state)
  }

  handleClick(e) {
    
  }


  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <div className="signup-form-email">
            <label>Email Address</label>
            <label>{this.props.email}</label>
            <button onClick={this.handleClick}>Edit</button>
          </div>

          <div className="signup-form-name">
            <label>First Name
              <input type="text" onChange={this.update('first_name')}/>
            </label>

            <label>Last Name
              <input type="text" onChange={this.update('last_name')}/>
            </label>
          </div>

          <div className="signup-form-password">
            <label>Password
              <input type="password" onChange={this.update('password')} />
            </label>
          </div>

          <input className="sign-in-button" type="submit" value="Sign Up" />

        </form>
      </div>
    )
  }
}

export default SignupForm;
