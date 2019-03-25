import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Dimensions,
  AsyncStorage
} from 'react-native';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/authActions';

import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.navigation.navigate('HomeScreen');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.navigation.navigate('HomeScreen')
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userData)
  }

  render() {
    const width = Dimensions.get('window').width;
    const { navigate } = this.props.navigation;
    const { errors } = this.state
    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={{ margin: 10 }}>
          <Text
            style={{
              fontFamily: 'montserrat-semibold',
              marginBottom: 5,
              fontSize: 50,
              fontWeight: 'bold',
              color: '#FFFFFF',
              shadowOpacity: 0.3,
              shadowRadius: 0.5,
              shadowColor: 'black',
              shadowOffset: { height: 2, width: 1 }
            }}
          >
            Visitor Suite Login
          </Text>
          <Text
            style={{
              fontFamily: 'montserrat-bold',
              fontSize: 60,
              fontWeight: 'bold',
              color: '#FFFFFF',
              shadowOpacity: 0.3,
              shadowRadius: 0.5,
              shadowColor: 'black',
              shadowOffset: { height: 2, width: 1 }
            }}
          >
            ↪︎
          </Text>

          <View style={styles.SectionStyle}>
            <Icon style={styles.IconStyle} name="envelope" size={20} color="#4FF0FB" />

            <TextInput
              style={{
                flex: 1,
                fontSize: 16,
                shadowOpacity: 0.3,
                shadowRadius: 0.5,
                shadowColor: 'black',
                shadowOffset: { height: 2, width: 1 }
              }}
              onChangeText={email =>
                this.setState({
                  email
                })
              }
              placeholder="Enter your email"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize='none'
            />
            <Text>{errors.email}</Text>
          </View>

          <View style={styles.SectionStyle}>
            <Icon style={styles.IconStyle} name="unlock" size={20} color="#4FF0FB" />
            <TextInput
              style={{ flex: 1, fontSize: 16 }}
              onChangeText={password =>
                this.setState({
                  password
                })
              }
              placeholder="Enter Password"
              underlineColorAndroid="transparent"
              returnKeyType="next"
              autoCorrect={false}
              autoCapitalize='none'
            />
          </View>
          <Text>{errors.password}</Text>
          <TouchableOpacity style={styles.btn} onPress={this.onSubmit}>
            <Text
              style={{
                color: 'rgb(255,255,255)',
                fontFamily: 'montserrat-regular'
              }}
            >
              Log In {'  '}
              <Icon name="arrow-right" size={20} />
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                flexDirection: 'row',
                alignSelf: 'stretch',
                padding: 5,
                alignItems: 'center',
                fontSize: 12,
                fontFamily: 'montserrat-regular'
              }}
            >
              Forgot your Password?
            </Text>
            <TouchableOpacity onPress={() => navigate('PasswordResetScreen')}>
              <Text
                style={{
                  flexDirection: 'row',
                  alignSelf: 'stretch',
                  padding: 5,
                  alignItems: 'center',
                  fontSize: 12,
                  fontFamily: 'montserrat-regular',
                  marginLeft: -5,
                  color: 'rgb(72,158,235)'
                }}
              >
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
  )(withNavigation(Login));