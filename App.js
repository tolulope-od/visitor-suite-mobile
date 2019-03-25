import React, { Component } from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';
import { Provider } from 'react-redux';
import store from './config/store';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

// import Navigator to be renedered into the app
import Navigator from './app/navigation/Navigator';

export default class App extends Component {
                 constructor() {
                   super();
                   this.state = {
                     fontLoaded: false,
                     isReady: false
                   };
                 }
                 async componentDidMount() {
                   await Font.loadAsync({
                     'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
                     'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
                     'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
                     'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
                     'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.otf')
                   });
                   this.setState({ fontLoaded: true });
                 }

                 async _cacheResourcesAsync() {
                   const fonts = await Font.loadAsync({
                     'raleway-medium': require('./assets/fonts/Raleway-Medium.ttf'),
                     'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
                     'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
                     'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
                     'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.otf')
                   });
                   return fonts
                 }

                 render() {
                   if (!this.state.isReady) {
                     return (
                       <AppLoading
                         startAsync={this._cacheResourcesAsync}
                         onFinish={() => this.setState({ isReady: true })}
                         onError={console.warn}
                       />
                     );
                   }

                   return (
                     <Provider store={store}>
                       <Navigator />
                     </Provider>
                   );
                 }
               }
