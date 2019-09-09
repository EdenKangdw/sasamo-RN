

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
    <View style = {styles.container}>
      <AppContainer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  container0: {
    flex: 1,
    // primary axis
    justifyContent: 'flex-start', // flex-start, flex-end, center, space-evenly, space-between, space-around
    // secondary axis
    alignItems: 'flex-start', // flex-start, flex-end, center, stretch, baseline
    backgroundColor: 'yellow',
    flexDirection: 'column',
    flexWrap: 'nowrap',// wrap or nowrap, wrap-reverse
    
  },
  container2: {
    flex: 1,
    // primary axis
    justifyContent: 'flex-start', // flex-start, flex-end, center, space-evenly, space-between, space-around
    // secondary axis
    alignItems: 'flex-start', // flex-start, flex-end, center, stretch, baseline
    backgroundColor: 'yellow',
    flexDirection: 'row',
    flexWrap: 'nowrap' // wrap or nowrap, wrap-reverse
  },
  box1 : {
    height: 100,
    width:'100%',
    flexBasis: 50,
    flexGrow:1, // 비율로 조절하기 
    // flexShrink: 1,
    backgroundColor: 'red'
  },
  box2 : {
    height: 100,
    width: 50,
    flexGrow: 1,
    backgroundColor: 'green'
  },
  box3 : {
    height: 100,
    width: 50,
    flexGrow:1,
    backgroundColor: 'blue'
  },
  
});

export default App;
