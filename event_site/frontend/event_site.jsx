import React from 'react';
import ReactDOM from 'react-dom';
import {createUser} from './util/user_api_util';
import {login, logout} from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<img src="http://i.imgur.com/TDzDJgd.gif"/>, root);
});
