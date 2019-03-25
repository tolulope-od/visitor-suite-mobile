import React, { Component } from 'react';
import { Text, View, Platform, Image, TouchableOpacity, StatusBar } from 'react-native';

// import components
import VisitorPersonalsForm from '../../components/visitor/VisitorPersonalsForm';
import styles from './styles';

class VisitorPersonalsScreen extends Component {
  static navigationOptions = {
    headerTitle: '',
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomColor: '#4FF0FB'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <VisitorPersonalsForm />
      </View>
    );
  }
}

export default VisitorPersonalsScreen;
