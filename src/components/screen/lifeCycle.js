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

type Props = {}
class Shared extends React.Component<Props> {

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    console.log('nextProps', nextProps)
    console.log('prevState', prevState)
    return {
      num : nextProps.children * 2
    }
    
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    console.log('nextProps', nextProps)
    console.log('nextState', nextState)
    return true
  }

  render() {
        return (
            
              <Text>{this.state.num}</Text>
            
        )
    }
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cnt: 0
    }
  }
    render() {
        return (
            <View style={styles.container}>
              <Shared>{this.state.cnt}</Shared>
              <TouchableOpacity
                onPress = {() => this.onPress()}
                >
                <Text>Press me!</Text>
                </TouchableOpacity>
            </View>
        )
    }

    onPress = () => {
      this.setState({
        cnt: this.state.cnt + 1,
      })
    }
}


