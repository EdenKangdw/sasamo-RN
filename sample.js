

import React, { Fragment } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

type Props = {}
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


