// Import React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import Redux Dependencies
import { connect } from 'react-redux';

// Import Components
import { Route, Redirect } from 'react-router-dom';


const AuthenticatedRoute = ({ component: RenderComponent, user, ...rest }) => {
  const isUserAuthenticated = user.isAuthenticated === true;

  return (
    <Route
      {...rest}
      render={props => (
        isUserAuthenticated === true ? <RenderComponent {...props} /> : <Redirect to="/login" />
      )}
    />
  );
};


AuthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  user: state.user,
});


export default connect(mapStateToProps)(AuthenticatedRoute);
