// Import React Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { Link } from 'react-router-dom';

import ROUTES from '../../constants/routes';

import styles from './NavBar.module.css';


const NavBar = ({ activePath }) => (
  <nav>
    <ul className={styles['nav-list-container']}>
      <li>
        <Link className={`${styles['nav-link']} ${ROUTES.DASHBOARD === activePath ? styles.active : ''}`} to={ROUTES.DASHBOARD}>Dashboard</Link>
      </li>
      <li>
        <Link className={`${styles['nav-link']} ${ROUTES.SEARCH === activePath ? styles.active : ''}`} to={ROUTES.SEARCH}>Search</Link>
      </li>
      <li>
        <Link className={`${styles['nav-link']} ${ROUTES.LOGIN === activePath ? styles.active : ''}`} to={ROUTES.LOGIN}>Login</Link>
      </li>
    </ul>
  </nav>
);

NavBar.propTypes = {
  activePath: PropTypes.string.isRequired,
};

export default NavBar;
