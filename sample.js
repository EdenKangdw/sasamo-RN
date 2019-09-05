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
    TextInput,
    TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1,
    }
})


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}></View>
        )
    }
}


