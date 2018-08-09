import React from 'react';
import SignupForm from './signup_form';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
  user: state.entities.user,
  email: state.session.lookUp.email,
  found: state.session.lookUp.found,
  errors: state.errors};
  };

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
