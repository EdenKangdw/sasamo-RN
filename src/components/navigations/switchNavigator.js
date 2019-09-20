import { createSwitchNavigator, createAppContainer, withNavigation } from 'react-navigation'

import AuthStackNavigator from './AuthStackNavigator'
import MainStackNavigator from './MainStackNavagator'
import lifeCycle from '../screen/lifeCycle'
import Loading from '../screen/loading'

export const SwitchNavigator = createSwitchNavigator(
  {
    Loading,
    AuthStackNavigator,
    MainStackNavigator,
    lifeCycle,
  },
  {
    initialRouteName: 'lifeCycle'
  }
)
export const AppContainer = createAppContainer(SwitchNavigator)
