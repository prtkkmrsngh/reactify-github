import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './../store';
import Index from '../pages/index';
import Profile from '../pages/profile';

const Routes = () => (
  <Provider store={store}>
    <Router>
      <>
        <Route exact path="/" component={Index} />
        <Route path="/users/:username" component={Profile} />
      </>
    </Router>
  </Provider>
);

export default Routes;
