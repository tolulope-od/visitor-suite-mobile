import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class VisitorSuccess extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('VisitorScreen');
    }, 5000);
  }

  render() {
    const { stateData } = this.props.navigation.state.params;
    console.log(this.props)
    return (
      <View>
        <Text style={styles.successText}>All done! Welcome {stateData.name}</Text>
      </View>
    );
  }
}

export default withNavigation(VisitorSuccess);
