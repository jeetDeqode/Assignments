/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// Import Navigators from React Navigation
// import { createStackNavigator, createAppContainer } from "react-navigation";
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Screens/Homescreen';
import LoginScreen from './Screens/Login';
import Dashboard from "./Screens/Dashboard";

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const AppNavigator = createStackNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Login:{
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
