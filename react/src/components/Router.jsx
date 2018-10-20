import React from 'react';
import { Switch, Route } from 'react-router-dom';

import IndexContainer from './index/IndexContainer';
import ProfileContainer from './profile/ProfileContainer';
import SignUpContainer from './signup/SignUpContainer';
import SearchContainer from './search/SearchContainer';
//Ryan Johnston & Tyler Philips, 10/20/18
//creates pages to be used for role assignment.

const Router = () => (
  <Switch>
    <Route exact path="/" component={IndexContainer} />
    <Route exact path="/profile/:id" component={ProfileContainer} />
    <Route exact path="/search" component={SearchContainer} />
    <Route exact path="/signup/:role" component={SignUpContainer} />
    {/* <Route component={404} /> */}
  </Switch>
);


export default Router;
