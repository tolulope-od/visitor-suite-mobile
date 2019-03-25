import React, { Component } from 'react';
import { LinearGradient } from 'expo';

// Load styles object
import styles from './styles';

import Register from '../../components/register/Register';

class RegisterScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <LinearGradient colors={['#8EC5FC', '#E0C3FC']} style={styles.container}>
        <Register />
      </LinearGradient>
    );
  }
}

export default RegisterScreen;
