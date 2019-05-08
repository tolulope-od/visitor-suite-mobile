import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { checkVisitor } from "../../../actions/visitorActions";
import InputValidation from "../../../validations/InputValidation";

const { isEmpty, isNotNum } = InputValidation;

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
        if (visitor.data.ifNewVisitor.msg === "A new visitor") {
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
      console.log("not received");
    }
  }

  checkInput = next => {
    const { phone_number } = this.state;
    if (isEmpty(phone_number)) {
      this.setState({
        errors: { phone_number: "Please enter a phone number" }
      });
      return false;
    }

    if (!isEmpty(phone_number) && isNotNum(phone_number)) {
      this.setState({
        errors: { phone_number: "Please enter a valid phone number" }
      });
      return false;
    }

    return next();
  };

  clearErrors = () => {
    return this.setState({ errors: "" });
  };

  onSubmit = () => {
    if (isNotNum(this.state.phone_number)) {
      this.setState({
        errors: { phone_number: "Please enter a valid phone number" }
      });
    } else {
      return this.props.checkVisitor(this.state.phone_number);
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    const { errors } = this.state;
    const { width: winWidth, height: winHeight } = Dimensions.get("window");
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
            <Text style={styles.headText}>
              Welcome, please enter your phone number
            </Text>

            <View style={styles.SectionStyle}>
              <Icon
                style={styles.IconStyle}
                name="phone"
                size={20}
                color="black"
              />

              <TextInput
                style={styles.textInput}
                onChangeText={phone_number => {
                  this.clearErrors();
                  this.setState({
                    phone_number
                  });
                }}
                placeholder="Phone Number"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                autoCorrect={false}
              />
            </View>
            <Text style={styles.errorTxt}>{errors.phone_number}</Text>
            <View>
              {isEmpty(this.state.phone_number) ? (
                <TouchableOpacity
                  style={styles.btnDisabled}
                  onPress={() => {
                    this.setState({
                      errors: {
                        phone_number: "Please input a phone number"
                      }
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
      </View>
    );
  }
}

VisitorForm.propTypes = {
  checkVisitor: PropTypes.func.isRequired,
  visitor: PropTypes.object.isRequired,
  success: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  visitor: state.visitor,
  success: state.success
});

export default connect(
  mapStateToProps,
  { checkVisitor }
)(withNavigation(VisitorForm));
