import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
      companyEmail: '',
      operatingCountry: '',
      phoneNumber: '',
      password: '',
      password2: ''
    };
  }
  render() {
    return (
      <View>
        <Text
          style={{
            fontFamily: 'montserrat-bold',
            marginBottom: 10,
            fontSize: 40,
            color: 'white'
          }}
        >
          Register an account
        </Text>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="user" size={20} color="black" />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={firstName =>
              this.setState({
                firstName
              })
            }
            placeholder="First Name"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="user" size={20} color="black" />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={lastName =>
              this.setState({
                lastName
              })
            }
            placeholder="Last Name"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="building" size={20} color="black" />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={companyName =>
              this.setState({
                companyName
              })
            }
            placeholder="Enter Company Name"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="envelope" size={20} color="black" />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={companyEmail =>
              this.setState({
                companyEmail
              })
            }
            placeholder="Enter Company Email"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="phone" size={20} color="black" />

          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={phoneNumber =>
              this.setState({
                phoneNumber
              })
            }
            placeholder="Enter Phone Number"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="key" size={20} color="black" />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={password =>
              this.setState({
                password
              })
            }
            placeholder="Enter Password"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="key" size={20} color="black" />
          <TextInput
            style={{
              flex: 1,
              fontSize: 16,
              paddingHorizontal: 10
            }}
            onChangeText={password2 =>
              this.setState({
                password2
              })
            }
            placeholder="Confirm Password"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
      </View>
    );
  }
}

export default Register;