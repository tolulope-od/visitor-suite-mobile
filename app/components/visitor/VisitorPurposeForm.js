import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { addNewVisitor } from '../../../actions/visitorActions';
import styles from './styles';

class VisitorPurposeForm extends Component {
  constructor(props) {
    super(props);
    const { stateData } = this.props.navigation.state.params;
    this.state = {
      name: stateData.name,
      address: stateData.address,
      email: stateData.email,
      purpose: {
        type: '',
        id: 'Appointment'
      },
      phone_number: stateData.phone_number,
      staff: '',
      custom: [],
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors })
    }

    if (newProps.visitor.success === true) {
      this.props.navigation.navigate('VisitorSuccessScreen', {
        stateData: {
          name: this.state.name
        }
      })
    } else {
      console.log('null')
    }
  }

  onSubmit = e => {
    e.preventDefault();

     const visitorData = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      purpose: this.state.purpose,
      phone_number: this.state.phone_number,
      staff: this.state.staff,
      custom: this.state.custom
    };
    this.props.addNewVisitor(visitorData);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text style={styles.headText}>Almost done... </Text>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="user" size={20} color="black" />

          <TextInput
            style={styles.textInput}
            onChangeText={staff =>
              this.setState({
                staff
              })
            }
            placeholder="Who are you here to see?"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="question" size={20} color="black" />

          <TextInput
            style={styles.textInput}
            onChangeText={type => {
              const purpose = { ...this.state.purpose };
              purpose.type = type
              this.setState({
                purpose
              })}
            }
            placeholder="Purpose of this Visit"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={ this.onSubmit
          // () => navigate('VisitorSuccessScreen', {
          // stateData: {
            // name: this.state.name
          }
        //})}
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
        <TouchableOpacity style={styles.btn} onPress={ () => console.log(this.props.visitor)
          // () => navigate('VisitorSuccessScreen', {
          // stateData: {
            // name: this.state.name
          }
        //})}
        >
          <Text
            style={{
              color: 'rgb(255,255,255)',
              fontFamily: 'montserrat-regular'
            }}
          >
            Check Props {'  '}
            <Icon name="arrow-right" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

VisitorPurposeForm.propTypes = {
  addNewVisitor: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  visitor: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  errors: state.errors,
  visitor: state.visitor
})

export default connect(
  mapStateToProps,
  { addNewVisitor }
)(withNavigation(VisitorPurposeForm));
