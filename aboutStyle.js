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
  Image,
  StatusBar,
} from 'react-native';


const App = () => {
  return (
   
         <View style={styles.container}>
           <View style={styles.view}></View>
           <Text style={styles.text}>Hello</Text>
           <Image style={styles.img} source={require('./assets/IU.jpg')}/>
          </View>
          
          
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // primary axis
    justifyContent: 'center', // flex-start, flex-end, center, space-evenly, space-between, space-around
    // secondary axis
    alignItems: 'center', // flex-start, flex-end, center, stretch, baseline
    backgroundColor: '#F5FCFF',
    backgroundColor: 'yellow',

    flexWrap: 'nowrap' // wrap or nowrap, wrap-reverse
  },

  view: {
      opacity: 0.5,
      height: 200,
      width: 200,
      backgroundColor: 'rgba(255,0,0,0.5)'
  },
  text: {
      height: 200,
      width:200,
      backgroundColor: 'blue'
  },
  img : {
      height: 200,
      width: 200
  }
  
  
});

export default App;
