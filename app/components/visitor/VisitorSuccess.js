import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { uploadVisitorPicture } from "../../../actions/visitorActions";
import styles from "./styles";

class VisitorSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploaded: false
    };
  }

  async componentDidMount() {}

  // upload = () => {
  //   const { visitors } = this.props.visitor;
  //   const { stateData } = this.props.navigation.state.params;
  //   const visitorID = visitors[0].data.id;
  //   let options;
  //   AsyncStorage.getItem("jwtToken")
  //     .then(token => {
  //       options = {
  //         headers: {
  //           //"Content-Type": "multipart/form-data",
  //           Authorization: token
  //         },
  //         method: "GET"
  //         //body: new FormData()
  //       };
  //       const cleanURL = stateData.visitorPicture.replace("file://", "");
  //       console.log(cleanURL);
  //       //options.body.append("visitorPicture", cleanURL);
  //     })
  //     .then(() => {
  //       console.log("--OPTIONS---");
  //       console.log(options);
  //       fetch(
  //         `http://localhost:5000/api/v1/visitor/picture/${visitorID}`,
  //         options
  //       )
  //         .then(response => response.json())
  //         .then(res => {
  //           console.log("THIS IS RES");
  //           console.log(res);
  //         });
  //     });
  // };

  uploadPicture = async () => {
    const { visitors } = this.props.visitor;
    const { stateData } = this.props.navigation.state.params;
    const visitorID = visitors[0].data.id;
    const cleanURL = stateData.visitorPicture.replace("file://", "");
    const data = new FormData();
    data.append("visitorPicture", {
      uri: cleanURL,
      name: "my_photo.jpg",
      type: "image/jpg"
    });
    const uploading = await this.props.uploadVisitorPicture(visitorID, data);
    console.log("------THIS IS THE VISITOR FORM DATA-------");
    console.log(uploading);
  };

  render() {
    const { visitors } = this.props.visitor;
    const { stateData } = this.props.navigation.state.params;
    const visitorID = visitors[0].data.id;
    return (
      <View>
        <Text style={styles.successText}>
          All done! Welcome {stateData.name}
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={
            this.uploadPicture
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

VisitorSuccess.propTypes = {
  uploadVisitorPicture: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  visitor: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  visitor: state.visitor,
  uploaded: state.uploaded
});

export default connect(
  mapStateToProps,
  { uploadVisitorPicture }
)(withNavigation(VisitorSuccess));
