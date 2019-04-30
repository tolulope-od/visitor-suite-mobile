import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getFormFields } from "../../../actions/visitorActions";
import styles from "./styles";

class VisitorReturningForm extends Component {
  constructor(props) {
    super(props);
    const { stateData } = this.props.navigation.state.params;
    this.state = {
      name: stateData.name,
      address: stateData.address,
      email: stateData.email,
      phone_number: stateData.phone_number
    };
  }

  componentDidMount() {
    this.props.getFormFields();
  }

  render() {
    const { navigate } = this.props.navigation;
    const { stateData } = this.props.navigation.state.params;
    return (
      <View>
        <Text style={styles.headText}>Welcome back, {stateData.name}</Text>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="user" size={20} color="black" />

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
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigate("VisitorPurposeScreen", {
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
