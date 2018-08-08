import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_FOUND} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = ({
  id: null
});

const sessionReducer = (state=_nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_FOUND:
      return merge({}, state, {found: action.found[0]});
    default:
      return state;
  }
};

export default sessionReducer;
