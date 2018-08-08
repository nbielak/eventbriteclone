import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.freeze) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, {errors: action.errors});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {errors: null});
    default:
      return state;
  }
};

export default sessionErrorsReducer;
