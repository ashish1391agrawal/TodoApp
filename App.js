import React from 'react';
import {createStackNavigator} from 'react-navigation';
import * as Screen from './src/Screens/';

const Application = createStackNavigator({
        Login: {screen: Screen.Login},
        Home: {screen: Screen.TodoList},
        SignUp: {screen: Screen.SignUp},
        ResetPassword: {screen: Screen.ResetPassword}
      }, {
        headerMode: 'float',
    }, {
        initialRouteName: {screen: Screen.Login},
    }
);

export default class App extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Home',
    });


  render() {
    return (
          <Application />
    );
  }
}
