import React from 'react';
import LookUpFormContainer from './look_up_form_container';
import SignUpFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

class SignInLanding extends React.Component {
  constructor(props) {
    super(props);
    this.found = this.props.found;
    this.email = this.props.email;
  }

  form() {
    if (this.found === "found") {
      return (<LoginFormContainer email={this.email} />);
    } else if (this.found === "not found") {
      return (<SignUpFormContainer email={this.email} />);
    } else {
      return (<LookUpFormContainer email={this.email} />);
    }
  }

  render() {
    return (
      <div>
        {this.form()}
      </div>
    )
  }
}

export default SignInLanding;
