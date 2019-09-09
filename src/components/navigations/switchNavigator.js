import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import Login from '../screen/login'
import signUp from '../screen/signUp'

export const SwitchNavigator = createSwitchNavigator(
  {
    Login,
    signUp
  },
  {
    initialRouteName: 'signUp'
  }
)
export const AppContainer = createAppContainer(SwitchNavigator)
