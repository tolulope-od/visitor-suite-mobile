import React, { Component } from 'react'
import { Text, View, Platform, Image, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: null,
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image source={require('../../../assets/icons/menu.png')} style={styles.icon} />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#7B4EF5',
      borderBottomColor: '#7B4EF5',
      elevation: 0
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 0,
      fontFamily: Platform.select({ ios: 'Avenir-Heavy', android: 'Roboto' }),
      color: 'rgb(255,255,255)'
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text>This is the HomeScreen</Text>
      </View>
    );
  }
}

export default HomeScreen;