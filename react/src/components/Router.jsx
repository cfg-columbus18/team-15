import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import ProfileContainer from './Profile/ProfileContainer';
import IndexContainer from './index/IndexContainer';

const Router = () => (
  <Switch>
    <Route exact path="/" component={IndexContainer} />
    {/* <Route exact path="/profile" component={ProfileContainer} /> */}
    {/* TODO <Route component={404}/> */}
  </Switch>
);


export default Router;
