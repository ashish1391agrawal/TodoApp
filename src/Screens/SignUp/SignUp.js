import React from 'react';
import {StyleSheet, AsyncStorage, Alert, View, Text, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as AllImage from '../../images/index';
import { UserText, Header } from '../../Components/index';
import * as style from '../../styles/index';

export class SignUp extends React.Component {
    static navigationOptions = {
        headerTitle: <Header text={'Sign Up'} image={AllImage.header}/>,
    };
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
        console.log('===signup===', this.props.navigation);
    }

    signUp = () => {
        AsyncStorage.setItem('name', this.state.userName);
        AsyncStorage.setItem('password', this.state.password);
        Alert.alert('Welcome To ToDo');
    };
    login = () => {
        this.props.navigation.navigate('Home');
    };
    render() {
        return (
            <View>
                <ImageBackground source={AllImage.backgroundImage} style={style.styles.container}>
                    <View style={style.styles.content}>
                        <KeyboardAvoidingView>
                            <UserText
                                onChange={(userName) => this.setState({userName})}
                                value={this.state.userName}
                                placeholder="Enter User Name"
                            />
                            <UserText
                                onChange={(password) => this.setState({password})}
                                value={this.state.password}
                                placeholder="Enter Password"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity
                                onPress={this.signUp}
                                style={style.styles.login}>
                                <Text style={{color: '#fff'}}>Sign Up</Text>
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                        <Text onPress={this.login}>Login</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
