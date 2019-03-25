import React, { Component } from 'react';
import { Text, View, Platform, Image, TouchableOpacity, StatusBar } from 'react-native';

// import components
import VisitorPurposeForm from '../../components/visitor/VisitorPurposeForm';
import styles from './styles';

class VisitorPurposeScreen extends Component {
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
        <VisitorPurposeForm />
      </View>
    );
  }
}

export default VisitorPurposeScreen;
