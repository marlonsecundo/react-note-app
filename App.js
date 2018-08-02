import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Home, Settings } from './src/screens';

import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import store from './src/redux/store';

const RootStack = createStackNavigator(
  {
    HomeScreen: Home,
    SettingsScreen: Settings
  },
  {
    initialRouteName: 'HomeScreen',
    mode: 'modal',
    headerMode: 'none',
  }
);

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={store}>
        <RootStack></RootStack>
      </Provider>);
  }

}