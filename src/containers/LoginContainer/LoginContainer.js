
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
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <AppContainer>
        <h2>Login Page</h2>
        <button onClick={this.simpleAction}>Test redux action</button>
        <div>
          {
            JSON.stringify(this.props)
          }
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
