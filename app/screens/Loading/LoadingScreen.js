import React, { Component } from "react";
import { Text, View, ActivityIndicator, StatusBar, AsyncStorage } from "react-native";

// Load styles object
import styles from "./styles";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('jwtToken');
    
    this.props.navigation.navigate(userToken ? 'MainNavigator' : 'AuthTabs');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ paddingBottom: 20 }}>Visitor Suite</Text>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    );
  }
}

export default LoadingScreen;
