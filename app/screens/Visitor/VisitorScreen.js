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
import VisitorForm from "../../components/visitor/VisitorForm";
import DigitalClock from "../../components/clock/Clock";
import ProgressStatus from "../../components/progressDisplay/ProgressStatus";
import styles from "./styles";

class VisitorScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Visitor Mode",
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require("../../../assets/icons/menu.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: "#ED7D3A",
      borderBottomColor: "#ED7D3A",
      elevation: 0
    },
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
      fontFamily: Platform.select({ ios: "Avenir-Heavy", android: "Roboto" }),
      color: "rgb(255,255,255)"
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ padding: 10, marginTop: -50 }}>
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
          <ProgressStatus style={styles.inActiveScreen} screenNumber={2} />
          <ProgressStatus style={styles.inActiveScreen} screenNumber={3} />
          <ProgressStatus style={styles.inActiveScreen} screenNumber={4} />
        </View>
        <VisitorForm />
      </View>
    );
  }
}

export default VisitorScreen;
