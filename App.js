import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Home, Settings } from './screens';
import { Provider } from 'react-redux';
import store from './store';
import Test from './components/test';

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
    //return <RootStack />;
    return (
    <Provider store={store}>
      <Test></Test>
    </Provider>) 

  }

}