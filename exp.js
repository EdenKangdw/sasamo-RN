/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const App = () => {
  return (
   
         <View style={styles.container}>
            <View style={[
                styles.wrapperCommon,
                styles.wrapper1
            ]}>
              <View style={[
                styles.boxCommon, 
                styles.box1
              ]}/>
              <View style={[
                styles.boxCommon, 
                styles.box2
              ]}/>
              <View style={[
                styles.boxCommon, 
                styles.box3
              ]}/>
            </View>
            <View style={[
                styles.wrapper2,
                styles.wrapperCommon,
            ]}>
              <View style={[
                styles.boxCommon, 
                styles.box4
              ]}/>
              <View style={[
                styles.boxCommon, 
                styles.box5
              ]}/>
            </View>
            <View style={[
                styles.wrapper3,
                styles.wrapperCommon,
            ]}>
              <View style={[
                styles.boxCommon, 
                styles.box6
              ]}/>
              <View style={[
                styles.boxCommon, 
                styles.box7
              ]}/>
              <View style={[
                styles.boxCommon, 
                styles.box8
              ]}/>
              <View style={[
                styles.boxCommon, 
                styles.box9
              ]}/>
            </View>
          </View>
          
          
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // primary axis
    justifyContent: 'flex-start', // flex-start, flex-end, center, space-evenly, space-between, space-around
    // secondary axis
    alignItems: 'baseline', // flex-start, flex-end, center, stretch, baseline
    backgroundColor: '#F5FCFF',
    backgroundColor: 'yellow',

    flexWrap: 'nowrap' // wrap or nowrap, wrap-reverse
  },

  wrapperCommon: {
    width: '100%',
    flexDirection: 'row',
  },

  wrapper1: {
    backgroundColor: 'red',
    flexBasis: 90 
  },

  wrapper2: {
    backgroundColor: 'green',
    flexGrow: 1,
    flexBasis: 0
  },

  wrapper3: {
    backgroundColor: 'blue',
    flexBasis: 90,
  },
  
  boxCommon: {
    flex: 1,
    height: 90,
  },

  box1 : {
    flexBasis: 90,
    flexGrow: 1,
    backgroundColor: 'red'
  },
  box2 : {
    flexBasis: 90,
    flexGrow: 1,
    backgroundColor: 'blue'
  },
  box3: {
    flexBasis: 90,
    flexGrow: 1,
    backgroundColor: 'green'
  },
  box4: {
    flexBasis: 90,
    minHeight: '100%',
    backgroundColor: 'yellow'
  },
  box5: {
    flexBasis: 90,
    minHeight: '100%',
    backgroundColor: 'skyblue'
  },
  box6 : {
    flexBasis: 90,
    flexGrow: 1,
    backgroundColor: 'red'
  },
  box7 : {
    flexBasis: 90,
    flexGrow: 1,
    backgroundColor: 'blue'
  },
  box8: {
    flexBasis: 90,
    flexGrow: 1,
    backgroundColor: 'purple'
  },
  box9: {
    flexBasis: 90,
    flexGrow: 1,
    backgroundColor: 'orange'
  },
  
  
});

export default App;
