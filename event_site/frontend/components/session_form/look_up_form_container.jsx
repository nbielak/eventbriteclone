import React from 'react';
import LookUpForm from './look_up_form';
import { lookUpUser } from '../../actions/session_actions';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  email: state.session.email,
  found: state.session.found
});

const mapDispatchToProps = dispatch => ({
  lookUpUser: email => dispatch(lookUpUser(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(LookUpForm);
