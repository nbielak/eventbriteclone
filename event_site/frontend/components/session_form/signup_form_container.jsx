import React from 'react';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {user: state.user,
  email: state.session.lookUp.email,
  errors: state.errors
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
