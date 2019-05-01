import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";

import styles from "./styles";
import VisitorPicture from "../../components/visitor/VisitorPicture";

class VisitorPictureScreen extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <StatusBar barStyle="dark-content" />
        <VisitorPicture />
      </View>
    );
  }
}

export default VisitorPictureScreen;
