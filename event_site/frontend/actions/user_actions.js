import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
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
