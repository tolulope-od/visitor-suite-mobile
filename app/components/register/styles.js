import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(104,72,160)",
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    marginBottom: 20,
    marginTop: -10,
    alignItems: "center",
    alignContent: "center",
    margin: 75
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(231,234,237)",
    width: 90 + "%",
    alignSelf: "center",
    borderRadius: 15,
    margin: 10,
    fontFamily: "montserrat-regular"
  },
  ScrollStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 90 + "%",
    alignSelf: "center"
  },
  IconStyle: {
    padding: 5,
    margin: 5,
    alignItems: "center"
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
    backgroundColor: "rgb(236, 88, 101)",
    padding: 10,
    alignItems: "center",
    width: 100,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10
  }
});

export default styles;