import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

// Load styles object
import styles from './styles';

class PasswordResetScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>THis is the Password Reset Screen</Text>
        <Button
          title="Back to Log In"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    );
  }
}

export default PasswordResetScreen;
