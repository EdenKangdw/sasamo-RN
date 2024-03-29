// @flow

import React, { Fragment } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import type {
    ____ViewStyleProp_Internal as ViewStyle,
    ____TextStyleProp_Internal as TextStyle,
    ____ImageStyleProp_Internal as ImageStyle,

} from 'react-native/Libraries/StyleSheet/StyleSheetTypes'

type Styles = {
    container: ViewStyle,
    btn : ViewStyle,
    btnDisabled: ViewStyle,
    txt: TextStyle,
    imgLeft: ImageStyle,
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    btn: {
      backgroundColor: 'transparent',
      alignSelf: 'center',
      borderRadius: 4,
      borderWidth: 2,
      width: '100%',
      height: '100%',
      borderColor: 'white',
  
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnDisabled: {
      backgroundColor: 'rgb(243,243,243)',
      alignSelf: 'center',
      borderRadius: 4,
      borderWidth: 2,
      width: '100%',
      height: '100%',
      borderColor: '#333',
  
      alignItems: 'center',
      justifyContent: 'center',
    },
    txt: {
      fontSize: 14,
      color: 'white',
    },
    imgLeft: {
      width: 24,
      height: 24,
      position: 'absolute',
      left: 16,
    },
  });

type Props = {
    containerStyle?: ViewStyle,
        isLoading?: boolean,
        isDisabled? : boolean,
        style?: ViewStyle,
        disabledStyle?: ViewStyle,
        textStyle?: TextStyle,
        imgLeftStyle?: ImageStyle,
        indicatorColor? : string,
        children?: string,
        onPress?: ()=> void,
        imgLeftSrc?: any,


}

export default class button extends React.Component<Props> {


    static defaultProps= {
        containerStyle: styles.container,
        isLoading: false,
        isDisabled : false,
        style: styles.btn,
        disabledStyle: styles.btnDisabled,
        textStyle: styles.txt,
        imgLeftStyle: styles.imgLeft,
        indicatorColor : '#FFFFFF',
       
        
    }
    
    render() {
        if (this.props.isDisabled) {
            return (
                <View style={this.props.containerStyle}>
                    <View style={this.props.disabledStyle}>
                        <Text style={this.props.textStyle}>{this.props.children}</Text>
                    </View>
                </View>
            )
        }

        if (this.props.isLoading) {
            return (
                <View style={this.props.containerStyle}>
                    <View style={this.props.style}>
                        <ActivityIndicator size='small' color={this.props.indicatorColor}/>
                    </View>
                </View>
            )
        }

        return (
            <View style={this.props.containerStyle}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={this.props.style}>
                        {
                            this.props.imgLeftStyle
                                ? <Image 
                                    style={this.props.imgLeftStyle}
                                    source={this.props.imgLeftSrc}
                                    />
                                : <View/>
                        }
                    <Text style={this.props.textStyle}>{this.props.children}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}


