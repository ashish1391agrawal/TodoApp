import React from 'react';
import { KeyboardAvoidingView, Button } from 'react-native';
import styles from './loginForm.scss';

export default class LoginForm extends Component {
render() {
 return (
     <view>
         <KeyboardAvoidingView />
         <Button Login/>
     </view>
 );
}
}