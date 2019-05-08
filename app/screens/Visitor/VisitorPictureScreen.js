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

import DigitalClock from "../../components/clock/Clock";
import ProgressStatus from "../../components/progressDisplay/ProgressStatus";

class VisitorPictureScreen extends Component {
  static navigationOptions = {
    headerTitle: "",
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomColor: "#4FF0FB"
    }
  };

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ padding: 10 }}>
          <DigitalClock />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            padding: 10,
            marginTop: `${-10}%`
          }}
        >
          <ProgressStatus style={styles.activeScreen} screenNumber={1} />
          <ProgressStatus style={styles.activeScreen} screenNumber={2} />
          <ProgressStatus style={styles.activeScreen} screenNumber={3} />
          <ProgressStatus style={styles.inActiveScreen} screenNumber={4} />
        </View>
        <VisitorPicture />
      </View>
    );
  }
}

export default VisitorPictureScreen;
