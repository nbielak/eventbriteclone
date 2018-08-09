import React from 'react';
import LookUpFormContainer from './look_up_form_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignInLanding extends React.Component {
  constructor(props) {
    super(props);
    this.form = this.form.bind(this);
  }

// redirect to route

  form() {
    if (this.props.found === "found") {
      return (<Redirect to={{pathname: "/signin/login", email: this.props.email, found: this.props.found}}/>);
    } else if (this.props.found === "not found") {
      return (<Redirect to={{pathname: "/signin/signup", email: this.props.email, found: this.props.found}}/>);
    } else {
      return (<LookUpFormContainer email={this.props.email} found={null}/>)
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
