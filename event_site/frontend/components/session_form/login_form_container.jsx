import React from 'react';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  email: state.session.lookUp.email,
  user: state.entities.user,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
