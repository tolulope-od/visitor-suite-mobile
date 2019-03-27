import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";

// import components
import VisitorReturningForm from "../../components/visitor/VisitorReturningForm";
import styles from "./styles";

class VisitorReturningScreen extends Component {
  static navigationOptions = {
    headerTitle: "",
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomColor: "#4FF0FB"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <VisitorReturningForm />
      </View>
    );
  }
}

export default VisitorReturningScreen;
