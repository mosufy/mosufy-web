import React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppContainer from './containers/AppContainer';
import HomeContainer from './containers/HomeContainer';
import NotFoundPageContainer from './containers/NotFoundPageContainer';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer}/>
    <Route path="*" component={NotFoundPageContainer}/>
  </Route>
);