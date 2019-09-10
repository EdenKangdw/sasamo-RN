/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import exp from './exp';
import styles from './aboutStyle'
import loginView from './src/components/screen/login'
import signUpView from './src/components/screen/signUp'
import test from './test'
import {name as appName} from './app.json';

export const colors = {
  background: '#e3e3e3',
  dusk: 'rgb(65, 77, 107)',
  dodgerBlue: 'rgb(58, 139, 255)',
  cloudyBlue: 'rgb(175,194,219)',
  blueyGray: 'rgb(134,154,183)',
  paleGray: 'rgb(233, 237, 244)',

}

AppRegistry.registerComponent(appName, () => App);
