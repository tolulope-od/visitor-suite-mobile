import React, { Component } from 'react';
import { Text, View, Platform, Image, TouchableOpacity, StatusBar } from 'react-native';

// import components
import VisitorSuccess from '../../components/visitor/VisitorSuccess';
import styles from './styles';

class VisitorSuccessScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <VisitorSuccess />
      </View>
    );
  }
}

export default VisitorSuccessScreen;
