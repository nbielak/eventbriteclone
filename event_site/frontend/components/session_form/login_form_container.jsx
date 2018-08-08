import React from 'react';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
  user: state.user,
  errors = state.erros,
  formType = 'login'
});

const mapDispatchToProps = dispatch => ({
  action: user => dispatch(login(user))
});
