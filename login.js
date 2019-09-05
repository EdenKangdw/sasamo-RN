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
import Button from './button'

const colors = {
    background: '#e3e3e3',
    dusk: 'rgb(65, 77, 107)',
    dodgerBlue: 'rgb(58, 139, 255)',
    cloudyBlue: 'rgb(175,194,219)',
    blueyGray: 'rgb(134,154,183)',
    paleGray: 'rgb(233, 237, 244)',

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',

    },
    iconWrapper: {
        position: 'absolute',
        top: 144, // 아이폰x의 status bar 높이가 44임
        left: 40,
        flexDirection: 'column',
        alignItems: 'flex-start'

    },

    icon: {
        width: 60,
        height: 48
    },

    iconText: {
        fontSize: 20,
        color: colors.dusk,
        marginTop: 16,
        fontWeight: 'bold',

    },

    wrapperInput: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    input: {
        alignSelf: 'stretch',
        color: colors.dodgerBlue,
        fontSize: 16,
        paddingVertical: 22,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: colors.paleGray,
    },

    viewBtnWrapper : {
        alignSelf: 'stretch',
        marginTop: 20,
        height: 60,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems : 'center',


    },

    btnLogin: {
        backgroundColor: colors.dodgerBlue,
        borderColor: colors.dodgerBlue,
        borderRadius: 4,
        borderWidth: 1,
        height: 60,
        shadowColor: colors.dodgerBlue,
        shadowOffset : {
            width: 0,
            height: 10
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,
        alignItems: 'center',
        justifyContent: 'center'

    },

    txtLogin : {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },

    btnSignUp: {
        backgroundColor: 'transparent',
        borderRadius: 4,
        borderWidth: 1,
        height: '100%',
        width: '100%',
        fontSize: 16,
        borderColor: colors.dodgerBlue,
       
        alignItems: 'center',
        justifyContent: 'center'

    },

    txtSignUP : {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.dodgerBlue,
    },

    wrapper: {
        marginTop: 260,
        width: '78%',
        height: 300,
        alignSelf: 'center',

        flexDirection: 'column',
        alignItems: 'center'

    },

    touchForgotPw: {
        marginTop: 20,
    },

    txtForgotPw: {
        fontSize: 12,
        color: colors.dodgerBlue,
        textDecorationLine: 'underline',
    },

    txtCopyright: {
        marginTop: 80,
        fontSize: 12,
        color: colors.cloudyBlue
    }





})

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            isLoggingin: false
        }
    }
    
    render() {
         return (
            <View style={styles.container}>
                <View style={styles.iconWrapper}>
                    <Image style={styles.icon} source={require('./assets/symbol.png')} />
                    <Text style={styles.iconText}>Hello</Text>
                </View>
                <View style={styles.wrapper}>
                    <View style={styles.wrapperInput}>
                        <TextInput
                            style={{marginTop: 60}}
                            txtLabel='Email'
                            txt={this.state.email}
                            /* labelStyleFocus = {{
                                color: 'red',
                                fontSize: 20,
                            }} props 전달을 확인하기 위한 코드 */ 
                            textHint='Please write your email address'
                            placeholderTextColor={colors.blueyGray}
                            onTextChanged={(text) => {
                                this.onTextChanged('EMAIL', text)
                            }}
                        />

                         <TextInput
                            style={[
                                { marginTop: 10 }
                            ]}
                            txtLabel='Password'
                            txt={this.state.password}
                            textHint='Please write your password'
                            placeholderTextColor={colors.blueyGray}
                            onTextChanged={(text) => {
                                this.onTextChanged('PASSWORD', text)
                            }}
                            isPassword
                        /> 

                    </View>
                    <View style={styles.viewBtnWrapper}>
                            <Button 
                                containerStyle={{ flex: 1}}
                                onPress = {() => {}}
                                style= {styles.btnSignUp}
                                textStyle={styles.txtSignUP}
                                >Sign Up</Button>
                                <View style={ {width: 8}}></View>
                            <Button 
                                containerStyle={{ flex: 1}}
                                isLoading={this.state.isLoggingin}
                                onPress = {() => {
                                    this.setState({
                                        isLoggingin: true
                                    }, () => {
                                        setTimeout(() => {
                                            this.setState({
                                                isLoggingin: false
                                            })
                                        }, 3000);
                                    })
                                }}
                                style= {styles.btnLogin}
                                textStyle={styles.txtLogin}
                                >Login</Button>

                    </View>
                    <TouchableOpacity style={styles.touchForgotPw}>
                        <Text style={styles.txtForgotPw}>Forgot password?</Text>
                    </TouchableOpacity>
                    <Text style={styles.txtCopyright}>copyright by Eden K.</Text>
                </View>
            </View>
        )
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

}





export default App;
