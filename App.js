import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Home, Settings } from './src/screens';

import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NewNoteView, ToastMessage } from './src/components';

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

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootStack></RootStack>
          <ToastMessage></ToastMessage>
        </View>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});