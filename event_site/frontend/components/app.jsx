import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SignInLandingContainer from './session_form/sign_in_landing_container';

const App = () => (
  <div>
    <header>
      <h1>EventSite</h1>
      <img src="https://media.giphy.com/media/26uf6k9JD5KgtytnW/giphy.gif"/>
    </header>
    <Switch>
      <Route path="/signin" component={SignInLandingContainer} />
    </Switch>
  </div>
);

export default App;
