import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#e7e5e5"
  },
  cameraContainer: {
    flex: 1,
    alignItems: "center"
  },
  icon: {
    paddingLeft: 10,
    width: 50,
    height: 50
  },
  activeScreen: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#2FBF71",
    borderRadius: 100,
    marginHorizontal: 30
  },
  inActiveScreen: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "grey",
    borderRadius: 100,
    marginHorizontal: 30
  }
});

export default styles;
