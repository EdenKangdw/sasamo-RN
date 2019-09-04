/* /**
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
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default class shared extends React.Component {

    defaultProps = {
        style: styles.wrapper,
        labelStyle: styles.label,
        labelStyleFocus: styles.labelFocus,
    }

    
    render() {
        return (
            <View style={[
                styles.wrapper,
                this.props.style
            ]}>
            {
                (!!this.props.txtLabel)
                ?   <Text style={this.state.focused ? this.props.labelStyleFocus : labelStyle}>
                        {this.props.txtLabel}
                        </Text> 
                    :   <View></View>
                    
                    
                }
            <TextInput
                style={[
                    this.state.focus ? styles.inputFocus : styles.input,
                    this.props.inputStyle,
                ]}
                multiline={this.props.multiline}
                onChangeText={this.props.onChangeText}
                value={this.props.txt}
                onFocus={ () => this.setState({ focused: true })}
                onBlur={ () => this.setState({focused: false })}
                placeholder={this.props.textHint}
                placeholderTextColor = {this.props.placeholderTextColor}
                secureText = {this.props.password}
                
                />

            </View>
        )
    }
}

const colors = {
    background: '#e3e3e3',
    dusk: 'rgb(65, 77, 107)',
    dodgerBlue: 'rgb(58, 139, 255)',
    cloudyBlue: 'rgb(175,194,219)',
    blueyGray: 'rgb(134,154,183)',
    paleGray: 'rgb(233, 237, 244)',

}



const styles = StyleSheet.create({
    wrapper: {
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },

    label: {
      color: colors.blueyGray,
      marginBottom: 8,
      fontSize: 12,
    },

    labelFocus: {
      color: colors.dodgerBlue,
      marginBottom: 8,
      fontSize: 12,
    },
    input: {
      alignSelf: 'stretch',
      color: colors.dusk,
      fontSize: 16,
      paddingVertical: 22,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: 'rgb(233,237,244)',
  
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    inputFocus: {
      alignSelf: 'stretch',
      color: colors.dusk,
      fontSize: 16,
      paddingVertical: 22,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: colors.dodgerBlue,
  
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  }) 
  