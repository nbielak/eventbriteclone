import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SignInLandingContainer from './session_form/sign_in_landing_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBar from './nav_bar/nav_bar';

const App = () => (
  <div>
    <header>
      <Link className="logo" to="/">EventSite</Link>
      <div className="header-search">
      </div>
      <NavBar />
    </header>
    <Switch>
      <Route path="/signin/login" component={LoginFormContainer} />
      <Route path="/signin/signup" component={SignupFormContainer} />
      <Route path="/signin" render={() => <SignInLandingContainer found={null} />} />
      <Route exact path="/" />
    </Switch>
  </div>
);

export default App;
