// Import React Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { Link } from 'react-router-dom';

import AppHeader from '../../components/AppHeader/AppHeader';

import styles from './AppContainer.module.css';

const AppContainer = ({ location, children }) => (
  <div>
    <AppHeader location={location} />
    <div className={styles.content}>
      {children}
    </div>
  </div>
);

AppContainer.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppContainer;
