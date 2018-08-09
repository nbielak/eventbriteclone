import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  update_password() {
    return e => {
      this.setState({email: this.props.email, password: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.replace('/'));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.resetFound(this.props.email);
  }

  render() {
    if (this.props.found === null) {
      return (<Redirect to={{pathname:"/signin"}} />);
    }
    if (!this.props.email) {
      return (<Redirect to="/signin" />);
    }
    return (
      <div>
        <h1>Welcome Back</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="login-form-email">
            <label>Email address</label>
            <label>{this.props.email}
              <button className="edit-email-button" onClick={this.handleClick}>Edit</button>
            </label>

          </div>

          <div className="login-form-password">
            <label>Password
              <input placeholder="Password" type="password" onChange={this.update_password()} />
            </label>
          </div>

          <input className="signin-button" type="submit" value="Log In" />

        </form>
      </div>
    )
  }

}

export default withRouter(LoginForm);
