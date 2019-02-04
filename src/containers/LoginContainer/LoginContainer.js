// Import React Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Redux Dependecies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Components
import AppContainer from '../AppContainer/AppContainer';

// Import Actions
import { loginUser } from './actions';

// Import Constants
import { API_STATES } from '../../constants/constants';
import ROUTES from '../../constants/routes';

// Import Styles
import styles from './LoginContainer.module.css';


class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
    };
  }

  componentDidUpdate() {
    const { history, user } = this.props;

    // Redirect to dashboard if user is logged in
    if (user.isAuthenticated) {
      history.push(ROUTES.DASHBOARD);
    }
  }

  handleUsernameChange = (event) => {
    const newUsername = {
      value: event.target.value,
      error: '',
    };

    if (newUsername.value === '') {
      newUsername.error = "Username can't be blank";
    }

    this.setState({
      username: newUsername,
    });
  }

  handlePasswordChange = (event) => {
    const newPassword = {
      value: event.target.value,
      error: '',
    };

    if (newPassword.value === '') {
      newPassword.error = "Password can't be blank";
    }

    this.setState({
      password: newPassword,
    });
  }

  handleLoginClick = () => {
    this.props.actions.loginUser(this.state.username.value, this.state.password.value);
  }

  isLoginFormValid = () => {
    const { username, password } = this.state;
    return (username.error === '' && password.error === '' && username.value !== '' && password.value !== '');
  }

  renderLoginState = () => {
    const { loginData } = this.props;

    switch (loginData.state) {
      case API_STATES.REQUESTED:
        return <h4>Please Wait...</h4>;

      case API_STATES.SUCCESSFUL:
      case API_STATES.FAILED:
        return <h4>{loginData.message}</h4>;

      default:
        return <h4>&nbsp;</h4>;
    }
  }


  render() {
    const { username, password } = this.state;
    const { location } = this.props;

    return (
      <AppContainer location={location}>
        <h2>Login</h2>
        <form className={styles['login-form']}>
          {this.renderLoginState()}
          <label htmlFor="username">
            <p className={styles['form-label']}><b>Username</b></p>
            <input
              className={styles['form-input']}
              type="text"
              placeholder="Luke Skywalker"
              name="username"
              required
              value={username.value}
              onChange={this.handleUsernameChange}
            />
            <span>{username.error}</span>
          </label>

          <label htmlFor="password">
            <p className={styles['form-label']}><b>Password</b></p>
            <input
              className={styles['form-input']}
              type="password"
              placeholder="*******"
              name="password"
              required
              onChange={this.handlePasswordChange}
              value={password.value}
            />
            <span>{password.error}</span>
          </label>
          <div className={styles['button-row']}>
            <button
              disabled={!this.isLoginFormValid()}
              onClick={this.handleLoginClick}
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </AppContainer>
    );
  }
}

LoginContainer.propTypes = {
  actions: PropTypes.shape({
    loginUser: PropTypes.func.isRequired,
  }).isRequired,
  loginData: PropTypes.shape({
    state: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    isAuthenticated: PropTypes.bool,
  }).isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loginUser }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
