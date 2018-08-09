import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update_password() {
    return e => {
      this.setState({email: this.props.email, password: e.target.value})
    };
  }

  handleSubmit(e) {
    this.state.login(this.state)
  }

  render() {
    return (
      <div>
        <h1>Welcome Back</h1>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="login-form-email">
            <label>Email address</label>
            <label>{this.props.email}
              <button>edit</button>
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

export default LoginForm;
