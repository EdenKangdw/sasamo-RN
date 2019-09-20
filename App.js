

import React, {Fragment} from 'react';
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

import { SwitchNavigator, AppContainer } from './src/components/navigations/switchNavigator'
import Login from './src/components/screen/login'
import SignUp from './src/components/screen/signUp'

const App = () => {
  return (
      <AppContainer/>
  );
};


export default App;
