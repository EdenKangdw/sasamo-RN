/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import TextInput from './textInput'

const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
})


export default class signUpScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <View style={styleMedia.wrapper}>
                <TextInput 
                  style={{marginTop: 8}}
                  txtLabel='EMAIL'
                  textHint='EMAIL'
                  txt={this.state.email}
                  onTextChanged={ (text) => this.onTextChanged('EMAIL', text)}
                  />
                  
              </View>
            </View>
        )
    }
}

onTextChanged = (type, text) => {
  switch (type) {
      case 'EMAIL':
          this.setState({
              email: text,

          })
          break;

      case 'PASSWORD':
          this.setState({
              password: text,
          })
          break;


  }
}


