import { createSwitchNavigator, createAppContainer, withNavigation } from 'react-navigation'

import AuthStackNavigator from './AuthStackNavigator'
import MainStackNavigator from './MainStackNavagator'
import Loading from '../screen/loading'

export const SwitchNavigator = createSwitchNavigator(
  {
    Loading,
    AuthStackNavigator,
    MainStackNavigator,
  },
  {
    initialRouteName: 'Loading'
  }
)
export const AppContainer = createAppContainer(SwitchNavigator)
