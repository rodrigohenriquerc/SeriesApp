import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import SerieDetailsScreen from './screens/SerieDetailsScreen';
import FormScreen from './screens/FormScreen';

const AppNavigator = createStackNavigator({
  'Form': {
    screen: FormScreen,
    navigationOptions: {
      title: 'Nova série'
    }
  },

  'Main': {
    screen: MainScreen
  },

  'Details': {
    screen: SerieDetailsScreen,
    navigationOptions: ({ navigation }) => {
      const { serie } = navigation.state.params;
      return ({
        title: serie.title
      });
    }
  },

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