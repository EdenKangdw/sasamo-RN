// @flow

import React, { Fragment } from 'react';
import {
  Platform,
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
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text>Loading...</Text>
            </View>
        )
    }
}


