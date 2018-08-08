import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import { lookUpUser } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.lookUpUser = lookUpUser;
  ReactDOM.render(<Root store={store}/>, root);
});
