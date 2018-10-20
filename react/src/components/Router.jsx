import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProfileContainer from './profile/ProfileContainer';
import IndexContainer from './index/IndexContainer';
import SearchContainer from './search/SearchContainer'

const Router = () => (
  <Switch>
    <Route exact path="/" component={IndexContainer} />
    <Route exact path="/profile" component={ProfileContainer} />
    <Route exact path="/search" component={SearchContainer} />

    {/* TODO <Route component={404}/> */}
  </Switch>
);


export default Router;
