import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const DELETE_USER = "DELETE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const deleteUser = userId => ({
  type: DELETE_USER,
  userId
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
);

export const updateUser = user => dispatch => (
  UserApiUtil.updateUser(user).then(user => dispatch(receiveUser(user)))
);

export const deleteUser = userId => dispatch (
  User.ApiUtil.deleteUser(userId).then(user => dispatch(deleteUser(userId)))
);
