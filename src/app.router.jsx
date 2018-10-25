import React, {Fragment} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import * as routes from './constants/Routes';

// Importing views
import HomePage from './components/views/HomePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path={routes.HOME} component={HomePage} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default AppRouter;
