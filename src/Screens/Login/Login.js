import React from 'react';
import {StyleSheet, AsyncStorage, Alert, View, Text, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as AllImage from '../../images/index';
import { UserText, Header } from '../../Components/index';
import * as style from '../../styles/index';

export class Login extends React.Component {
    static navigationOptions = {
        headerTitle: <Header text={'Login'} image={AllImage.backgroundImage}/>,
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }
    login = () => {
        let password = '';
        let name = '';
        AsyncStorage.getItem('password', (err,  value) => {
            password = value;
            AsyncStorage.getItem('name', (err,  value) => {
                name = value;
                if (name === this.state.userName && this.state.password === password) {
                    Alert.alert('Welcome', 'Succesfully Login', [{
                        text: 'OK', onPress: () => this.props.navigation.navigate('Home')
                    }]);
                }else {
                    Alert.alert('Sorry', 'Invalid User Name Password');
                }
                this.setState({userName: ''});
                this.setState({password: ''});
            });
        });
    };
    signUp = () => {
        this.setState({userName: ''});
        this.setState({password: ''});
        this.props.navigation.navigate('SignUp');
    };
    resetPassword = () => {
        this.setState({userName: ''});
        this.setState({password: ''});
        this.props.navigation.navigate('ResetPassword');
    };
    render() {
        return (
            <View>
                <ImageBackground source={AllImage.backgroundImage} style={style.styles.container}>
                    <View style={style.styles.content}>
                        <KeyboardAvoidingView>
                            <UserText onChange={(userName) => this.setState({userName})}
                                       value={this.state.userName}
                                       placeholder="Enter User Name" />

                            <UserText onChange={(password) => this.setState({password})}
                                value={this.state.password}
                                placeholder="Enter Password"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity
                                onPress={this.login}
                                style={style.styles.login}>
                                <Text style={{color: '#fff'}}>Login</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                        <Text onPress={this.signUp}>Sign Up</Text>
                        <Text onPress={this.resetPassword}>Reset Your Password</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
