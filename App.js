import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Home, Settings } from './screens';
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
    return <RootStack />;
    
  }

}