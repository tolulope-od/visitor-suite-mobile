import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';
// import navigation library to create screen stacks
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  StackViewTransitionConfigs,
  createAppContainer
} from "react-navigation";

// Import Screens
import LoadingScreen from '../screens/Loading';
import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/Login';
import PasswordResetScreen from '../screens/PasswordReset';
import BurgerMenu from '../components/burgerMenu';
import HomeScreen from '../screens/Home';
import { VisitorScreen, VisitorPersonalsScreen, VisitorPurposeScreen, VisitorSuccessScreen, VisitorReturningScreen } from '../screens/Visitor';

const IOS_MODAL_ROUTES = ['OptionsScreen'];

let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  return StackViewTransitionConfigs.defaultTransitionConfig(
    transitionProps,
    prevTransitionProps,
    IOS_MODAL_ROUTES.some(
      screenName =>
        screenName === transitionProps.scene.routeName ||
        (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    )
  );
};

const HomeStack = createStackNavigator({ HomeScreen }, { initialRouteName: 'HomeScreen', transitionConfig: dynamicModalTransition });

HomeStack.navigationOptions = ({ navigation }) => {
  // Lock tab bar when away from home screen-if tab bars are used
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  // Lock drawer when away from homescreen
  let drawerLockMode = 'unlocked';
  if (navigation.state.index > 0) {
    drawerLockMode = 'lock-closed';
  }

  return {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-home" type="ionicon" color={tintColor} />,
    tabBarVisible,
    drawerLockMode,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => <Icon name="md-home" type="ionicon" color={tintColor} />
  };
}

const Login = createStackNavigator({ LoginScreen, PasswordResetScreen });

Login.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Log In',
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({
        ios: 'md-log-in',
        android: 'md-log-in'
      });
      return <Icon name={iconName} size={30} type="ionicon" color={tintColor} />;
    },
    tabBarVisible,
    tabBarOptions: {
      style: {
        backgroundColor: 'transparent',
        borderTopColor: 'transparent',
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 10,
        height: 50
      }
    }
  }
};

const Register = createStackNavigator({ RegisterScreen });

Register.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Sign Up',
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({
        ios: 'ios-person-add',
        android: 'ios-person-add'
      });
      return <Icon name={iconName} size={30} type="ionicon" color={tintColor} />;
    },
    tabBarVisible,
    tabBarOptions: {
      style: {
        backgroundColor: 'transparent',
        borderTopColor: 'transparent',
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 10,
        height: 50
      }
    }
  };
};

const VisitorStack = createStackNavigator({ VisitorScreen, VisitorPersonalsScreen, VisitorReturningScreen, VisitorPurposeScreen, VisitorSuccessScreen }, { initialRouteName: 'VisitorScreen', transitionConfig: dynamicModalTransition });

VisitorStack.navigationOptions = ({ navigation }) => {
  // Lock tab bar when away from home screen-if tab bars are used
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  // Lock drawer when away from homescreen
  let drawerLockMode = 'unlocked';
  if (navigation.state.index > 0) {
    drawerLockMode = 'lock-closed';
  }

  return {
    tabBarLabel: 'Visitor Mode',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-Visitor Mode" type="ionicon" color={tintColor} />,
    tabBarVisible,
    drawerLockMode,
    drawerLabel: 'Visitor Mode',
    drawerIcon: ({ tintColor }) => <Icon name="md-home" type="ionicon" color={tintColor} />
  };
}

const AuthTabs = createBottomTabNavigator({ Login, Register });

const MainNavigator = createDrawerNavigator({ HomeStack, VisitorStack }, { contentComponent: BurgerMenu });

const RootSwitch = createAppContainer(
  createSwitchNavigator(
    {
      LoadingScreen,
      AuthTabs,
      MainNavigator
    },
    {
      initialRouteName: 'MainNavigator'
    }
  )
)

export default RootSwitch;