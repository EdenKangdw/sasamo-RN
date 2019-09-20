import { createStackNavigator } from 'react-navigation-stack'

import Login from '../screen/login'
import SignUp from '../screen/signUp'

const StackNavigator = createStackNavigator(
  {
    Login,
    SignUp
  },
  {
    initialRouteName: 'Login'
  }
)

export default StackNavigator
