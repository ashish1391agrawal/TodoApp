import React from 'react';
import {createStackNavigator} from 'react-navigation';
import * as Screen from './src/Screens/';

const Application = createStackNavigator({
      Home: {screen: Screen.Login, title: 'Login'},
      SignUp: {screen: Screen.SignUp, title: 'SignUp'},
      ResetPassword: {screen: Screen.ResetPassword, title: 'Reset Password'}
  }, {
    headerMode: 'float',
});
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
