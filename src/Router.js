import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';

const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem vindo'
    }
  },
  'Register': {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Novo usuário'
    }
  },
  'Main': {
    screen: MainScreen
  }
}, {
  defaultNavigationOptions: {
    title: 'Séries',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#303030'
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 30
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;