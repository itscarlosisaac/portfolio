import React, { Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import * as routes from './constants/Routes';
import withTracker from './components/helpers/withTracker';
// Importing views
import HomePage from './components/views/HomePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path={routes.HOME} component={withTracker(HomePage)} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default AppRouter;
