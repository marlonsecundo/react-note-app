import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Home, Settings } from './src/screens';
import { ToastMessage } from './src/components';

import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

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
        <PersistGate loading={(<View></View>)} persistor={persistor}>
          <View style={styles.container}>
            <RootStack></RootStack>
            <ToastMessage></ToastMessage>
          </View>
        </PersistGate>
      </Provider>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});