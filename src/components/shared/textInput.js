//@flow

import React, { Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';



import type {
    ____ViewStyleProp_Internal as ViewStyle,
    ____TextStyleProp_Internal as TextStyle,
    ____ImageStyleProp_Internal as ImageStyle,

} from 'react-native/Libraries/StyleSheet/StyleSheetTypes'

const colors = {
    background: '#e3e3e3',
    dusk: 'rgb(65, 77, 107)',
    dodgerBlue: 'rgb(58, 139, 255)',
    cloudyBlue: 'rgb(175,194,219)',
    blueyGray: 'rgb(134,154,183)',
    paleGray: 'rgb(233, 237, 244)',
}

type Style = {
    wrapper: ViewStyle,
    label: TextStyle,
    labelFocus: TextStyle,
    input: ViewStyle,
    inputFocus: ViewStyle,

}

const styles : Style = StyleSheet.create({
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

  type Props = {
      style?: ViewStyle,
      labelStyle? : TextStyle,
      labelStyleFocus? : TextStyle,
      onTextChanged? : (val: string) => void,
      txtLabel? : string,
      textHint? : string,
      placeholderTextColor? : string,
      isPassword? : boolean,
      multiline? : boolean,
      inputFocus? : ViewStyle,
      input? : ViewStyle,
      inputStyle?: ViewStyle,
      txt? : string,


  }

  type State = {
      focused: boolean
  }


export default class shared extends React.Component<Props, State> {

    static defaultProps:Props = {
        style: styles.wrapper,
        labelStyle: styles.label,
        labelStyleFocus: styles.labelFocus,
        inputFocus : styles.inputFocus,
        input : styles.input,
    }

    state = {
        focused : false
    }

    
    render() {
        return (
            <View style={[
                styles.wrapper,
                this.props.style,
            ]}>
            {
                (!!this.props.txtLabel)
                ?   <Text style={this.state.focused ? this.props.labelStyleFocus : this.props.labelStyle}>
                        {this.props.txtLabel}
                    </Text> 
                : <View/>
                    
                    
                }
            <TextInput
                style={[
                    this.state.focused ? this.props.inputFocus : this.props.input,
                    this.props.inputStyle,
                ]}
                multiline={this.props.multiline}
                onChangeText={this.props.onTextChanged}
                value={this.props.txt}
                onFocus={ () => this.setState({ focused: true })}
                onBlur={ () => this.setState({focused: false })}
                placeholder={this.props.textHint}
                placeholderTextColor = {this.props.placeholderTextColor}
                secureTextEntry = {this.props.isPassword}
                
                />

            </View>
        )
    }
}
