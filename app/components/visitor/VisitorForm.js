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
      phone_number: "",
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.visitor.visitor) {
      const visitor = nextProps.visitor.visitor;
      if (visitor.data) {
        if (visitor.data.ifNewVisitor.msg === 'A new visitor') {
          this.props.navigation.navigate("VisitorPersonalsScreen", {
            stateData: {
              phone_number: this.state.phone_number
            }
          });
        } else {
          // navigate to next screen and pass state data from redux
          // console.log(visitor.data.ifNewVisitor.default.address)
          this.props.navigation.navigate("VisitorReturningScreen", {
            stateData: {
              phone_number: this.state.phone_number,
              name: visitor.data.ifNewVisitor.default.name,
              address: visitor.data.ifNewVisitor.default.address,
              email: visitor.data.ifNewVisitor.default.email
            }
          });
        }
      }
    } else {
      console.log('not received');
    }
  }

  onSubmit = () => {
    this.props.checkVisitor(this.state.phone_number);
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.headText}>
          Welcome, please enter your phone number
        </Text>

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
        <TouchableOpacity
          style={styles.btn}
          onPress={
            // this.onSubmit
            () => navigate('VisitorPersonalsScreen', {
              stateData: this.state.phone_number
          }
           )}
        >
          <Text
            style={{
              color: "rgb(255,255,255)",
              fontFamily: "montserrat-regular"
            }}
          >
            Next {"  "}
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