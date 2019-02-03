
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Redux Dependecies
import { connect } from 'react-redux';

// Import Actions
import { simpleAction } from './actions';

// Import Styles
import styles from './LoginContainer.modules.css';
import AppContainer from '../AppContainer/AppContainer';


class LoginContainer extends Component {
  handleLoginClick = () => {
    this.props.simpleAction();
  }

  render() {
    return (
      <AppContainer>
        <h2>Login Page</h2>
        <div>
          <label htmlFor="username">
            <b>Username</b>
            <input type="text" placeholder="Luke Skywalker" name="username" required />
          </label>

          <label htmlFor="password">
            <b>Password</b>
            <input type="password" placeholder="*******" name="password" required />
          </label>
          <button onClick={this.handleLoginClick} type="button">Login</button>
        </div>
      </AppContainer>
    );
  }
}

LoginContainer.propTypes = {

};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
