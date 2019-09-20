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
    timer

    render() {
        return (
            <View style={styles.container}>
              <Text>Loading...</Text>
            </View>
        )
    }

    componentDidMount() {
       this.timer = setTimeout(() => {
            this.props.navigation.navigate('AuthStackNavigator')
        }, 1500);
    }

    componentWillMount() {
        if(this.timer) {
            clearTimeout(this.timer)
        }
    }
}


