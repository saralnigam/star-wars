// Import React Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Components
import { Link } from 'react-router-dom';

import AppHeader from '../../components/AppHeader/AppHeader';


class AppContainer extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        {this.props.children}
      </div>
    );
  }
}

AppContainer.propTypes = {

};

export default AppContainer;
