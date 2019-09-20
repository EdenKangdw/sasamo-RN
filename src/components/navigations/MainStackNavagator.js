import { createStackNavigator } from 'react-navigation-stack'

import MainTabNavigator, { MainTabNavigatorOptions } from './MainTabNavigator'
import search from '../screen/search'

export default createStackNavigator(
  {
    MainTabNavigator : {
      screen: MainTabNavigator,
      navigationOptions: MainTabNavigatorOptions,
    },
    search,
  },
  
)
