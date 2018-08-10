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
import NavBarContainer from './nav_bar/nav_bar_container';
import LookUpFormContainer from './session_form/look_up_form_container';
import AuthRoute from '../util/route_util';

const App = () => (
  <div>
    <header>
      <div className="logo" >
        <Link className="logo-link" to="/">EventSite</Link>
      </div>

      <div className="header-search">
      </div>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute path="/signin/login" component={LoginFormContainer} />
      <AuthRoute path="/signin/signup" component={SignupFormContainer} />
      <AuthRoute path="/signin" render={() => <LookUpFormContainer found={null} />} />
      <Route exact path="/" />
    </Switch>
  </div>
);

export default App;
