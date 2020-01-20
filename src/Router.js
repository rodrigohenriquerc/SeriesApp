import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import SerieDetailsScreen from './screens/SerieDetailsScreen';
import FormScreen from './screens/FormScreen';

const AppNavigator = createStackNavigator({
  'Login': {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Bem vindo'
    }
  },

  'Main': {
    screen: MainScreen
  },

  'Form': {
    screen: FormScreen,
    navigationOptions: ({ navigation }) => {
      if (navigation.state.params && navigation.state.params.serieToEdit) {
        return {
          title: navigation.state.params.serieToEdit.title
        }
      };
      return {
        title: 'Nova série'
      };
    }
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