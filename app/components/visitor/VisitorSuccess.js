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

  async componentDidMount() {
    const pictureUpload = await this.uploadPicture();
    if (this.state.uploaded) {
      setTimeout(() => {
        this.props.navigation.navigate("VisitorScreen");
      }, 3000);
    }
  }

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
    uploading === "Profile picture updated"
      ? this.setState({ uploaded: true })
      : null;
    return uploading;
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
