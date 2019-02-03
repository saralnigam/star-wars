// Import React Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { Link } from 'react-router-dom';

import ROUTES from '../../constants/routes';

import styles from './NavBar.module.css';


const NavBar = () => (
  <nav>
    <ul className={styles['nav-list-container']}>
      <li>
        <Link className={`${styles['nav-link']} ${styles.active}`} to={ROUTES.DASHBOARD}>Dashboard</Link>
      </li>
      <li>
        <Link className={styles['nav-link']} to={ROUTES.LOGIN}>Login</Link>
      </li>
      <li>
        <Link className={styles['nav-link']} to={ROUTES.SEARCH}>Search</Link>
      </li>
    </ul>
  </nav>
);

NavBar.propTypes = {

};

export default NavBar;
