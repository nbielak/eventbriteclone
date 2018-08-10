import React from 'react';
import { withRouter } from 'react-router-dom';

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
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => this.props.history.push('/'));
  }

  handleClick(e) {
    e.preventDefault();
    this.props.resetFound(this.props.email);
    this.props.history.push('/signin');
  }

  render() {
    return (
      <div>
        <h1>Welcome Back</h1>
        <div className="login-form-email">
          <label>Email address</label>
          <label>{this.props.email}
            <button className="edit-email-button" onClick={this.handleClick}>Edit</button>
          </label>

        </div>
        <form className="login-form" onSubmit={this.handleSubmit}>
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
