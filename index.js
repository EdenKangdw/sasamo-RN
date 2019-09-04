/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import exp from './exp';
import styles from './aboutStyle'
import loginView from './login'
import test from './test'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => loginView);
