import React, { Component } from 'react';
import { LinearGradient } from 'expo';

// Load styles object
import styles from './styles';

import Login from '../../components/login/Login';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <LinearGradient colors={['#8EC5FC', '#E0C3FC']} style={styles.container}>
        <Login />
      </LinearGradient>
    );
  }
}

export default LoginScreen;
