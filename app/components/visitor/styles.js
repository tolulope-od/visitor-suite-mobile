import { StyleSheet, Dimensions } from "react-native";
const { width: winWidth, height: winHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  main: {
    width: `${88}%`,
    alignItems: "center",
    backgroundColor: "white",
    marginTop: -40,
    borderRadius: 25,
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 }
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(104,72,160)",
    paddingLeft: 40,
    paddingRight: 40
  },
  headText: {
    fontFamily: "montserrat-regular",
    fontSize: 20,
    color: "black",
    marginRight: 48,
    paddingBottom: 40
  },
  successText: {
    fontFamily: "montserrat-bold",
    marginBottom: 10,
    fontSize: 50,
    color: "black"
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(231,234,237)",
    width: `${100}%`,
    alignSelf: "center",
    borderRadius: 15,
    margin: 10,
    fontFamily: "montserrat-regular"
  },
  IconStyle: {
    padding: 5,
    margin: 5,
    alignItems: "center"
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    width: `${100}%`,
    fontFamily: "montserrat-regular"
  },
  btn: {
    backgroundColor: "#EF2D56",
    padding: 10,
    alignItems: "center",
    width: `${100}%`,
    borderRadius: 15,
    marginBottom: 10,
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 }
  },
  btnDisabled: {
    justifyContent: "center",
    backgroundColor: "grey",
    padding: 10,
    alignItems: "center",
    width: `${100}%`,
    borderRadius: 15,
    marginBottom: 10
  },
  cameraBtn: {
    alignSelf: "center",
    backgroundColor: "#EF2D56",
    padding: 10,
    alignItems: "center",
    width: `${100}%`,
    borderRadius: 15,
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 }
  },
  cameraTxt: {
    fontFamily: "montserrat-bold",
    marginBottom: 10,
    fontSize: 30,
    color: "whitesmoke",
    alignSelf: "center"
  },
  errorTxt: {
    alignSelf: "flex-start",
    color: "orangered",
    padding: 20,
    fontSize: 20,
    fontFamily: "montserrat-regular"
  },
  imageHeader: {
    height: `${50}%`,
    backgroundColor: "#ED7D3A",
    flex: 1,
    width: `${99.99}%`,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25
  }
});

export default styles;
