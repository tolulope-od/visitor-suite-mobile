import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    marginBottom: 20,
    marginTop: -10,
    alignItems: "center",
    alignContent: "center",
    margin: 73
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(231,234,237, 0.4)",
    alignSelf: "center",
    borderRadius: 15,
    margin: 10,
    fontFamily: "montserrat-regular"
  },
  IconStyle: {
    padding: 5,
    margin: 5,
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 },
  },
  textInput: {
    alignSelf: "stretch",
    color: "rgb(236,88,101)",
    height: 40,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: "rgb(236,88,101)",
    fontFamily: "montserrat-regular"
  },
  btn: {
    alignSelf: "stretch",
    backgroundColor: "#4FF0FB",
    padding: 10,
    alignItems: "center",
    width: 100,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 1 },
  }
});

export default styles;