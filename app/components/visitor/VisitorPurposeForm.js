import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Picker,
  Alert,
  Button,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import Autocomplete from "react-native-autocomplete-input";
import Debug from "debug";
import { addNewVisitor, getFormFields } from "../../../actions/visitorActions";
import { fetchAllStaff } from "../../../actions/staffActions";
import styles from "./styles";

class VisitorPurposeForm extends Component {
  constructor(props) {
    super(props);
    const { stateData } = this.props.navigation.state.params;
    this.state = {
      name: stateData.name,
      address: stateData.address,
      email: stateData.email,
      purpose: {
        type: "",
        id: ""
      },
      phone_number:
        typeof stateData.phone_number === "object"
          ? stateData.phone_number.phone_number
          : stateData.phone_number,
      staff: "",
      custom: [],
      form: {},
      staffList: [],
      query: "",
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.addStaffToState();
    console.log(this.state);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }

    if (newProps.visitor.success === true) {
      this.props.navigation.navigate("VisitorSuccessScreen", {
        stateData: {
          name: this.state.name
        }
      });
    }
  }

  async addStaffToState() {
    const allStaff = await this.props.fetchAllStaff();
    this.setState({ staffList: this.props.staff.staff }); // this could be redundant
  }

  findStaff(query) {
    if (query === "") {
      return [];
    }

    //const { staff } = this.props.staff
    const regex = new RegExp(`${query.trim()}`, "i");
    return this.props.staff.staff.filter(
      person => person.name.search(regex) >= 0
    );
  }

  // figure out whyit pushes back to VisitorPersonalsScreen
  onSubmit = e => {
    e.preventDefault();

    // Since we can't set the exact state of the purpose object wih react native picker item,
    // create a copy of the purpose from the state and submit it with the form
    const purpose = { ...this.state.purpose };
    const value = purpose.type.split(", ");
    purpose.type = value[1];
    purpose.id = value[0];
    const id = this.state.purpose.id;
    const type = this.state.purpose.type;
    const visitorData = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      purpose: {
        id: this.state.purpose.id.split(", ")[0],
        type: this.state.purpose.id.split(", ")[1]
      },
      phone_number: this.state.phone_number,
      staff: this.state.staff,
      custom: this.state.custom
    };
    this.props.addNewVisitor(visitorData);
  };

  render() {
    const { form, loading } = this.props.visitor;
    let formContent;
    let formData = [];
    let customFormData = [];
    let companyCustomFormContent;
    let companyCustomFormValues;
    if (Object.keys(form).length === 0 || loading) {
      formContent = <ActivityIndicator />;
      companyCustomFormContent = <ActivityIndicator />;
    } else {
      const results = form.data
        .filter(datum => datum.options !== undefined)
        .map(datum => datum.options);
      results[0].map(res =>
        res.option !== undefined ? formData.push(res) : customFormData.push(res)
      );
      // Render default options in picker
      formContent = formData.map((data, key) => (
        <Picker.Item
          label={data.option}
          value={`${data.option}, ${data.type}`}
          type={data.type}
          key={key}
        />
      ));

      companyCustomFormValues = customFormData.map(data => {
        return data;
      });
      // Render custom options if they're available
      companyCustomFormContent = companyCustomFormValues[0].options.map(
        (customFormFields, key) => (
          <Picker.Item
            label={customFormFields.option}
            value={`${customFormFields.id}, ${companyCustomFormValues[0].type}`}
            type={companyCustomFormValues[0].type}
            key={key}
          />
        )
      );
    }

    const { query } = this.state;
    const staff = this.findStaff(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <View>
        <Text style={styles.headText}>Almost done... </Text>

        <View style={styles.SectionStyle}>
          <Icon style={styles.IconStyle} name="user" size={20} color="black" />

          <Autocomplete
            autoCapitalize="none"
            autoCorrect={false}
            containerStyle={styles.textInput}
            data={staff.length === 1 && comp(query, staff[0].name) ? [] : staff}
            defaultValue={query}
            onChangeText={text => this.setState({ query: text })}
            placeholder="Enter staff name"
            renderItem={({ name, id }) => (
              //you can change the view you want to show in suggestion from here
              <TouchableOpacity
                onPress={() => this.setState({ query: name, staff: id })}
              >
                <Text>{name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Picker
          mode="dropdown"
          selectedValue={this.state.purpose.type}
          onValueChange={(itemValue, itemIndex) => {
            this.setState(prevState => ({
              purpose: {
                ...prevState.purpose,
                type: itemValue,
                id: itemValue
              }
            }));
          }}
          {...this.props}
        >
          <Picker.Item label="Select Visiting Purpose" value="" />
          {formContent}
          {companyCustomFormContent}
        </Picker>

        <TouchableOpacity
          style={styles.btn}
          onPress={
            this.onSubmit
            // () => navigate('VisitorSuccessScreen', {
            // stateData: {
            // name: this.state.name
          }
          //})}
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

VisitorPurposeForm.propTypes = {
  addNewVisitor: PropTypes.func.isRequired,
  getFormFields: PropTypes.func.isRequired,
  getAllStaff: PropTypes.func.isRequired,
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
  { addNewVisitor, getFormFields, fetchAllStaff }
)(withNavigation(VisitorPurposeForm));
