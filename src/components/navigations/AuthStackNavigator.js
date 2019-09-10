import { createStackNavigator } from 'react-navigation'

import Login from '../screen/login'
import SignUp from '../screen/signUp'

export default createStackNavigator(
  {
    Login,
    SignUp
  },
  {
    initialRouteName: 'Login'
  }
)
