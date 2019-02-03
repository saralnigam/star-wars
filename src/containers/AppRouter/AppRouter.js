// Import React Dependencies
import React from 'react';

// Import Components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from '../../components/AuthenticatedRoute/AuthenticatedRoute';
import LoginContainer from '../LoginContainer/LoginContainer';
import SearchContainer from '../SearchContainer/SearchContainer';


const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route path="/login" component={LoginContainer} />
      <AuthenticatedRoute path="/search" component={SearchContainer} />
    </Switch>
  </Router>
);


export default AppRouter;
