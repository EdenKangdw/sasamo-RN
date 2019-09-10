import { createStackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import search from '../screen/search'

export default createStackNavigator(
  {
    MainTabNavigator
    search,
  },
  {
    initialRouteName: 'Login'
  }
)
