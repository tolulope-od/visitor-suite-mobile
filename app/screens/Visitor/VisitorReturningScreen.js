import React, { Component } from "react";
import {
  Text,
  View,
  Platform,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";

// import components
import DigitalClock from "../../components/clock/Clock";
import ProgressStatus from "../../components/progressDisplay/ProgressStatus";
import VisitorReturningForm from "../../components/visitor/VisitorReturningForm";
import styles from "./styles";

class VisitorReturningScreen extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: "",
    headerStyle: {
      backgroundColor: "transparent",
      borderBottomColor: "#4FF0FB"
    }
  };

  render() {
    console.log("THESE ARE THE PROPS");
    console.log(this.props);
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
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
          <ProgressStatus style={styles.activeScreen} screenNumber={2} />
          <ProgressStatus style={styles.inActiveScreen} screenNumber={3} />
          <ProgressStatus style={styles.inActiveScreen} screenNumber={4} />
        </View>

        <VisitorReturningForm />
      </View>
    );
  }
}

VisitorReturningScreen.propTypes = {
  visitor: PropTypes.object.isRequired,
  success: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  visitor: state.visitor,
  success: state.success
});

export default connect(mapStateToProps)(withNavigation(VisitorReturningScreen));
