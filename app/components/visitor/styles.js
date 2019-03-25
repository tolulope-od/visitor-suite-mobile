import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(104,72,160)',
    paddingLeft: 40,
    paddingRight: 40
  },
  headText: {
    fontFamily: 'montserrat-bold',
    marginBottom: 10,
    fontSize: 30,
    color: 'black'
  },
  successText: {
    fontFamily: 'montserrat-bold',
    marginBottom: 10,
    fontSize: 50,
    color: 'black'
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(231,234,237)',
    width: 90 + '%',
    alignSelf: 'center',
    borderRadius: 15,
    margin: 10,
    fontFamily: 'montserrat-regular'
  },
  IconStyle: {
    padding: 5,
    margin: 5,
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#4FF0FB',
    padding: 10,
    alignItems: 'center',
    width: 100,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
    shadowOpacity: 0.3,
    shadowRadius: 0.5,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 1 }
  }
});

export default styles