import React from 'react';
import {createStackNavigator} from 'react-navigation';
import * as Screen from './src/Components/';

const Application = createStackNavigator({
      Home: {screen: Screen.Login}
  },
    {
        headerMode: 'none',
    });
export default class App extends React.Component {
  render() {
    return (
          <Application />
    );
  }
}
