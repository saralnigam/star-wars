// Import React Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Import Redux Dependecies
import { connect } from 'react-redux';

import AppContainer from '../AppContainer/AppContainer';


const DashboardContainer = ({ user, location }) => (
  <AppContainer location={location}>
    <h3>{`Welcome ${user.name}`}</h3>
  </AppContainer>
);

DashboardContainer.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  location: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  user: state.user,
});


export default connect(mapStateToProps)(DashboardContainer);
