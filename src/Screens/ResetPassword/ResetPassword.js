import React from 'react';
import {StyleSheet, AsyncStorage, Alert, View, Text, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as AllImage from '../../images/index';
import { UserText, Header } from '../../Components/index';
import * as style from '../../styles/index';

export class ResetPassword extends React.Component {
    static navigationOptions = {
        headerTitle: <Header text={'Reset Password'} image={AllImage.header}/>,
    };
    constructor(props) {
        super(props);
        this.state = {
            confirmPassword: '',
            newPassword: '',
            oldPassword: ''
        };
    }
    resetPassword = () => {
        AsyncStorage.getItem('password', (err,  value) => {
            const oldPassword = value;
            if (this.state.oldPassword && this.state.oldPassword === oldPassword ) {
                if (this.state.newPassword === this.state.confirmPassword ) {
                    AsyncStorage.setItem('password', this.state.newPassword);
                    Alert.alert('Reset Password', 'Password Successfully Changed', [{
                        text: 'OK', onPress: () => this.props.navigation.navigate('Login')
                    }]);
                }else {
                    Alert.alert('Invalid Password', 'Password Mismatch');
                }
            }else {
                Alert.alert('Invalid Password', 'Please Enter Correct Password');
            }
        });
    };

    render() {
        return (
            <View>
                <ImageBackground source={AllImage.backgroundImage} style={style.styles.container}>
                    <View style={style.styles.content}>
                        <KeyboardAvoidingView>
                            <UserText onChange={(oldPassword) => this.setState({oldPassword})}
                                value={this.state.oldPassword}
                                placeholder="Enter Old Password"
                            />
                            <UserText onChange={(newPassword) => this.setState({newPassword})}
                                value={this.state.newPassword}
                                placeholder="Enter New Password"
                                secureTextEntry={true}
                            />
                            <UserText onChange={(confirmPassword) => this.setState({confirmPassword})}
                                value={this.state.confirmPassword}
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity
                                onPress={this.resetPassword}
                                style={style.styles.login}>
                                <Text style={{color: '#fff'}}>Save</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
