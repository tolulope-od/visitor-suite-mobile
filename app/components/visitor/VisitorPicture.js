import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Camera, Permissions } from "expo";
import { withNavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

import cameraStyles from "../camera/styles";
import Toolbar from "../camera/Toolbar";
import Gallery from "../camera/Gallery";

const { width: winWidth, height: winHeight } = Dimensions.get("window");

class VisitorPicture extends Component {
  constructor(props) {
    super(props);
    const { stateData } = this.props.navigation.state.params;
    this.state = {
      name: stateData.name,
      address: stateData.address,
      email: stateData.email,
      phone_number:
        typeof stateData.phone_number === "object"
          ? stateData.phone_number.phone_number
          : stateData.phone_number,
      captures: [],
      capturing: null,
      hasCameraPermission: null,
      cameraType: Camera.Constants.Type.front,
      flashMode: Camera.Constants.FlashMode.off,
      filePath: ""
    };
  }

  camera = null;

  setFlashMode = flashMode => this.setState({ flashMode });
  setCameraType = cameraType => this.setState({ cameraType });
  handleCaptureIn = () => this.setState({ capturing: true });

  handleCaptureOut = () => {
    if (this.state.capturing) this.camera.stopRecording();
  };

  handleShortCapture = async () => {
    const photoData = await this.camera.takePictureAsync();
    this.setState({
      capturing: false,
      captures: [photoData, ...this.state.captures],
      filePath: photoData.uri
    });
  };

  handleLongCapture = async () => {
    const videoData = await this.camera.recordAsync();
    this.setState({
      capturing: false,
      captures: [videoData, ...this.state.captures]
    });
  };

  async componentDidMount() {
    const camera = await Permissions.askAsync(Permissions.CAMERA);
    const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    const hasCameraPermission =
      camera.status === "granted" && audio.status === "granted";

    this.setState({ hasCameraPermission });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { phone_number } = this.state;
    console.log(phone_number);

    const {
      hasCameraPermission,
      flashMode,
      cameraType,
      capturing,
      captures
    } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>Access to camera has been denied.</Text>;
    }

    return (
      <React.Fragment>
        <View>
          <Camera
            type={cameraType}
            flashMode={flashMode}
            style={cameraStyles.preview}
            ref={camera => (this.camera = camera)}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: winWidth,
                padding: 30,
                flexWrap: "wrap-reverse"
              }}
            >
              <Text style={styles.cameraTxt}>
                Align your face for a picture
              </Text>
              <TouchableOpacity
                style={styles.cameraBtn}
                onPress={() =>
                  navigate("VisitorPurposeScreen", {
                    stateData: {
                      name: this.state.name,
                      address: this.state.address,
                      email: this.state.email,
                      phone_number: this.state.phone_number,
                      visitorPicture: this.state.filePath
                    }
                  })
                }
              >
                <Text>
                  Next {"  "}
                  <Icon name="arrow-right" color="whitesmoke" size={20} />
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>

        {captures.length > 0 && <Gallery captures={captures} />}

        <Toolbar
          capturing={capturing}
          flashMode={flashMode}
          cameraType={cameraType}
          setFlashMode={this.setFlashMode}
          setCameraType={this.setCameraType}
          onShortCapture={this.handleShortCapture}
        />
      </React.Fragment>
    );
  }
}

export default withNavigation(VisitorPicture);
