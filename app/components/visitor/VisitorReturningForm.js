import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFormFields } from "../../../actions/visitorActions";
import styles from "./styles";
import InputValidation from "../../../validations/InputValidation";

const { isEmpty, isNotEmail } = InputValidation;

class VisitorReturningForm extends Component {
  constructor(props) {
    super(props);
    const { stateData } = this.props.navigation.state.params;
    this.state = {
      name: stateData.name,
      address: stateData.address,
      email: stateData.email,
      phone_number: stateData.phone_number,
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getFormFields();
  }

  clearErrors = () => {
    return this.setState({ errors: "" });
  };

  onSubmit = () => {
    const { name, address, email, errors } = this.state;
    const { navigate } = this.props.navigation;
    if (name.trim().length < 6) {
      return this.setState({
        errors: { name: "Name must be more than 6 characters" }
      });
    }

    if (address.trim().length < 10) {
      return this.setState({
        errors: { address: "Adress cannot be less than 10 characters" }
      });
    }

    if (isNotEmail(email)) {
      return this.setState({
        errors: { email: "Please enter a valid email address" }
      });
    }

    return navigate("VisitorPictureScreen", {
      stateData: {
        name: this.state.name,
        address: this.state.address,
        email: this.state.email,
        phone_number: this.state.phone_number
      }
    });
  };

  render() {
    const { name, address, email, errors } = this.state;
    const { navigate } = this.props.navigation;
    const { stateData } = this.props.navigation.state.params;
    return (
      <View style={styles.main}>
        <View style={{ height: `${70}%` }}>
          <View style={styles.imageHeader}>
            <View style={{ width: `${45}%` }}>
              <Text
                style={{
                  color: "#DDDBF1",
                  fontSize: 40,
                  borderTopRightRadius: 25,
                  textAlign: "center",
                  marginTop: 30
                }}
              >
                Visitor Suite
              </Text>
            </View>
            <View
              style={{
                width: `${55}%`,
                height: `${100}%`,
                borderTopRightRadius: 25,
                overflow: "hidden"
              }}
            >
              <Image
                source={require("../../../assets/profileBackgrnd.jpg")}
                style={{
                  width: `${100}%`,
                  height: `${100}%`
                }}
              />
            </View>
          </View>
          <View style={{ marginBottom: -150, padding: 50 }}>
            <Text style={styles.headText}>Welcome back, {stateData.name}</Text>

            <View style={styles.SectionStyle}>
              <Icon
                style={styles.IconStyle}
                name="user"
                size={20}
                color="black"
              />

              <TextInput
                style={styles.textInput}
                onChangeText={name =>
                  this.setState({
                    name
                  })
                }
                placeholder={stateData.name}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                autoCorrect={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Icon
                style={styles.IconStyle}
                name="building"
                size={20}
                color="black"
              />

              <TextInput
                style={styles.textInput}
                onChangeText={address =>
                  this.setState({
                    address
                  })
                }
                placeholder={this.state.address}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                autoCorrect={false}
              />
            </View>

            <View style={styles.SectionStyle}>
              <Icon
                style={styles.IconStyle}
                name="envelope"
                size={20}
                color="black"
              />

              <TextInput
                style={styles.textInput}
                onChangeText={email =>
                  this.setState({
                    email
                  })
                }
                placeholder={this.state.email}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                autoCorrect={false}
              />
            </View>
            <Text style={styles.errorTxt}>
              {errors.required_fields ||
                errors.name ||
                errors.address ||
                errors.email}
            </Text>
            {isEmpty(name) || isEmpty(address) || isEmpty(email) ? (
              <TouchableOpacity
                style={styles.btnDisabled}
                onPress={() => {
                  this.setState({
                    errors: { required_fields: "All fields are required" }
                  });
                }}
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
            ) : (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.onSubmit()}
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
            )}
          </View>
        </View>
      </View>
    );
  }
}

VisitorReturningForm.propTypes = {
  getFormFields: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  visitor: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  success: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  visitor: state.visitor,
  form: state.form,
  staff: state.staff,
  success: state.success
});

export default connect(
  mapStateToProps,
  { getFormFields }
)(withNavigation(VisitorReturningForm));
