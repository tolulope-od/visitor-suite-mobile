import React, { Component } from 'react';
import Orientation, { orientation } from 'react-native-orientation';

// import Navigator to be renedered into the app
import Navigator from './navigation/Navigator';

export default class App extends Component {
  componentDidMount = () => {
    Orientation.lockToPortrait();
  };

  render() {
    return <Navigator />;
  }
}
