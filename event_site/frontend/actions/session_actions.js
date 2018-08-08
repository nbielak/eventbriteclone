import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


export const login = currentUser => dispatch => (
  SessionApiUtil.login(currentUser).then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const signup = currentUser => dispatch => (
  SessionApiUtil.signup(currentUser).then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
);
