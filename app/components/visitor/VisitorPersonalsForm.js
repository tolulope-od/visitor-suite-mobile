import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import { connect } from "react-redux";
import { getFormFields } from "../../../actions/visitorActions";

class VisitorPersonalsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      email: "",
      phone_number: this.props.navigation.state.params.stateData
    };
  }

  componentDidMount() {
    this.props.getFormFields();
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text style={styles.headText}>
          Just a little more information about you...
        </Text>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="user" size={20} color="black" />

          <TextInput
            style={styles.textInput}
            onChangeText={name =>
              this.setState({
                name
              })
            }
            placeholder="Enter Your Name"
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
            placeholder="Enter Your Address"
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
            placeholder="Enter Your Email"
            underlineColorAndroid="transparent"
            returnKeyType="next"
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigate("VisitorPictureScreen", {
              stateData: {
                name: this.state.name,
                address: this.state.address,
                email: this.state.email,
                phone_number: this.state.phone_number
              }
            })
          }
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

VisitorPersonalsForm.propTypes = {
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
)(withNavigation(VisitorPersonalsForm));
