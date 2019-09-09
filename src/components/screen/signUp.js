// @flow

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import type {
    ____ViewStyleProp_Internal as ViewStyle,
    ____TextStyleProp_Internal as TextStyle,
    ____ImageStyleProp_Internal as ImageStyle,

} from 'react-native/Libraries/StyleSheet/StyleSheetTypes'


import TextInput from '../shared/textInput'
import Button from '../shared/button'


import colors  from '../../utils/styles'

type Styles = {
    container: ViewStyle,
    wrapper: ViewStyle,
    btnWrapper: ViewStyle,
    btnRegister: ViewStyle,
    txtRegister: TextStyle,
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'nowrap'
    },

    wrapper: {
      marginTop: 40,
      width: '78%',

      flexDirection: 'column',
      alignItems: 'center'
    },

    btnWrapper: {
      width: '100%',
      alignItems: 'flex-end',
      flexDirection: 'column'

    },

    btnRegister : {
      backgroundColor: colors.dodgerBlue,
      borderColor : colors.dodgerBlue,
      borderRadius: 4,
      borderWidth: 1,
      width: 136,
      height: 60,
      marginLeft: 4,
      marginTop: 24,
      marginBottom: 48,
      shadowColor: colors.dodgerBlue,
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowRadius: 4,
      shadowOpacity: 0.3,

      alignItems: 'center',
      justifyContent: 'center'

    },

    txtRegister : {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white'
    }

})
type Props = {

}

type State = {
    email?: string,
    password?: string,
    name?: string,
    statusMsg?: string,
    isRegistering?: boolean
    
}

export default class signUpScreen extends React.Component<Props, State> {

  constructor(props: Props){
    super(props)
    this.state = {
      email: '',
      password: '',
      name: '',
      statusMsg: '',
      isRegistering: false
    }
  }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.wrapper}>
                <TextInput 
                  style={{marginTop: 8}}
                  txtLabel='EMAIL'
                  textHint='Please write your E-mail'
                  txt={this.state.email}
                  onTextChanged={ (text) => this.onTextChanged('EMAIL', text)}
                  />
                <TextInput 
                  style={{marginTop: 24}}
                  txtLabel='PASSWORD'
                  textHint='Please write your password'
                  txt={this.state.password}
                  onTextChanged={ (text) => this.onTextChanged('PASSWORD', text)}
                  isPassword
                  />
                <TextInput 
                  style={{marginTop: 24}}
                  txtLabel='NAME'
                  textHint='Please write your name'
                  txt={this.state.name}
                  onTextChanged={ (text) => this.onTextChanged('NAME', text)}
                  />
                <TextInput 
                  style={{marginTop: 24}}
                  txtLabel='STATUS MSG'
                  textHint='Please write your status message'
                  txt={this.state.statusMsg}
                  onTextChanged={ (text) => this.onTextChanged('STATUS_MSG', text)}
                  />
                  <View style={styles.btnWrapper}>
                    <Button 
                      isLoading={this.state.isRegistering}
                      onPress={() => {}}
                      style={styles.btnRegister}
                      textStyle={styles.txtRegister}
                      >Register</Button>
                  </View>
                  
              </View>
            </View>
        )
    }
    onTextChanged = (type : string, text: string) => {
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
          case 'NAME':
              this.setState({
                  name: text,
              })
              break;
          case 'STATUS_MSG':
              this.setState({
                  statusMsg: text,
              })
              break;

          
    
    
      }
    }
}



