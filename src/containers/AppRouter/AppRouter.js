// Import React Dependencies
import React from 'react';

// Import Components
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginContainer from '../LoginContainer/LoginContainer';


const AppRouter = () => (
  <Router>
    <Route path="/" component={LoginContainer} />
  </Router>
);


export default AppRouter;
