import React from 'react';
import LookUpFormContainer from './look_up_form_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import { connect } from 'react-redux'

class SignInLanding extends React.Component {
  constructor(props) {
    super(props);
    this.found = this.props.found;
    this.email = this.props.email;
    this.form = this.form.bind(this);
  }

  form() {
    if (this.props.found === "found") {
      return (<LoginFormContainer email={this.props.email} />);
    } else if (this.props.found === "not found") {
      return (<SignupFormContainer email={this.props.email} />);
    } else {
      return (<LookUpFormContainer email='' />);
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

const mapStateToProps = state => {
  return {
    email: state.session.lookUp.email,
    found: state.session.lookUp.found
  }
};

const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, null)(SignInLanding);
