import React from 'react';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors,
  formType: 'login'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
