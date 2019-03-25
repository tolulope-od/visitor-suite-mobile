import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { checkVisitor } from '../../../actions/visitorActions';

class VisitorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: ""
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = () => {
      const { phone_number } = this.state;
      const existingVisitor = this.props.checkVisitor(phone_number);

      if (existingVisitor) {
        console.log(existingVisitor)
        this.props.navigation.navigate('VisitorPersonalsScreen');
      } else {
        console.log(existingVisitor)
      }
    }

  render() {
    
    const { navigate } = this.props.navigation

    return (
      <View>
        <Text style={styles.headText}>Welcome, please enter your phone number</Text>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="phone" size={20} color="black" />

          <TextInput
            style={styles.textInput}
            onChangeText={phone_number =>
              this.setState({
                phone_number
              })
            }
            placeholder="Phone Number"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity style={styles.btn} onPress={
          () => navigate('VisitorPersonalsScreen', {
          stateData: this.state.phone_number
        })}
        >
          <Text
            style={{
              color: 'rgb(255,255,255)',
              fontFamily: 'montserrat-regular'
            }}
          >
            Next {'  '}
            <Icon name="arrow-right" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

VisitorForm.propTypes = {
  checkVisitor: PropTypes.func.isRequired,
  visitor: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  visitor: state.visitor
})

export default connect(
  mapStateToProps,
  { checkVisitor }
)(withNavigation(VisitorForm));