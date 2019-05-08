import React, { Component } from "react";
import { Text, View } from "react-native";

class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    setInterval(() => {
      const now = new Date().toLocaleString();
      const split = now.split("/");
      const day = split[1];
      const month = months[split[0] - 1];
      const year = split[2];
      const time = new Date()
        .toLocaleString()
        .split("/")[2]
        .split(", ")[1];
      this.setState({
        curTime: `${day} ${month}, ${year}`
      });
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 40,
            fontFamily: "montserrat-bold",
            marginBottom: 30
          }}
        >
          {this.state.curTime}
        </Text>
      </View>
    );
  }
}

export default DigitalClock;
