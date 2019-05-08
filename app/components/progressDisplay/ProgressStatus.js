import React, { Component } from "react";
import { Text, View } from "react-native";

// import components
class ProgressStatus extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <Text
          style={{
            color: "white"
          }}
          screenNumber={this.props.screenNumber}
        >
          {this.props.screenNumber}
        </Text>
      </View>
    );
  }
}

export default ProgressStatus;
