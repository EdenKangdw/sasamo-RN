import { createSwitchNavigator, createAppContainer, withNavigation } from 'react-navigation'

import AuthStackNavigator from './AuthStackNavigator'
import Loading from '../screen/loading'

export const SwitchNavigator = createSwitchNavigator(
  {
    Loading,
    AuthStackNavigator,
  },
  {
    initialRouteName: 'Login'
  }
)
export const AppContainer = createAppContainer(SwitchNavigator)
