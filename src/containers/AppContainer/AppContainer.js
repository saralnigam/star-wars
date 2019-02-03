import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class AppContainer extends Component {
  render() {
    return (
      <div>
        <h1>AppContainer</h1>
        <div>
          <Link to="/">Dashboard</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link to="/login">Login</Link>
          <span>&nbsp;|&nbsp;</span>
          <Link to="/search">Search</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}

AppContainer.propTypes = {

};

export default AppContainer;
