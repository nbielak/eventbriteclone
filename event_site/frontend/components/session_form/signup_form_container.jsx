import React from 'react';
import SessionForm from './session_form';
import { signup} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps => ({
  user: state.user,
  errors: state.errors,
  formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  action: user => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
