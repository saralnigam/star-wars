import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar/NavBar';

import styles from './AppHeader.module.css';


class AppHeader extends Component {
  render() {
    return (
      <div className={styles['app-header']}>
        <img src="https://dummyimage.com/60x40/000/fff.png&text=SWAPI" alt="Swapi" />
        <NavBar />
      </div>
    );
  }
}

AppHeader.propTypes = {

};

export default AppHeader;
