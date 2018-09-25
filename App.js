import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Home, About } from './src/screens';
import { ToastMessage } from './src/components';

import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import SplashScreen from 'react-native-splash-screen';

import transitionConfig from './src/modules/TransitionConfig';

const RootStack = createStackNavigator(
  {
    HomeScreen: Home,
    AboutScreen: About
  },
  {
    initialRouteName: 'HomeScreen',
    mode: 'card',
    headerMode: 'none',
    transitionConfig,
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
          {this.renderContent()}
       </PersistGate>
      </Provider>
    );
  }

  renderContent = () => (
    <View style={styles.container}>
      <RootStack></RootStack>
      <ToastMessage></ToastMessage>
    </View>
  );

  componentDidMount() {
    setTimeout( ()=> {
      SplashScreen.hide();
    }, 3000);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});