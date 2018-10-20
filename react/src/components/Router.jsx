import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IndexContainer from './index/IndexContainer';
import ProfileContainer from './profile/ProfileContainer';
import SignUpContainer from './signup/SignUpContainer';

const Router = () => (
  <Switch>
    <Route exact path="/" component={IndexContainer} />
    <Route exact path="/profile" component={ProfileContainer} />
    <Route exact path="/signup/:role" component={SignUpContainer} />
    {/* <Route component={404} /> */}
  </Switch>
);


export default Router;
