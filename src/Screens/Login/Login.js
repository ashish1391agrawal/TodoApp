import React from 'react';
import {StyleSheet, AsyncStorage, Alert, View, Text, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as AllImage from '../../images/index';
import { UserText, Header } from '../../Components/index';

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
                    Alert.alert('Welcome', 'Succesfully Login');
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
                <ImageBackground source={AllImage.backgroundImage} style={styles.container}>
                    <View style={styles.content}>
                        <KeyboardAvoidingView>
                            <UserText style={styles.textInput}
                                       onChange={(userName) => this.setState({userName})}
                                       value={this.state.userName}
                                       placeholder="Enter User Name" />

                            <UserText onChange={(password) => this.setState({password})}
                                value={this.state.password}
                                placeholder="Enter Password"
                                secureTextEntry={true}
                            />
                            <TouchableOpacity
                                onPress={this.login}
                                style={styles.login}>
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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    content: {
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 250,
        borderWidth: 1,
        marginBottom: 15,
        borderColor: 'transparent',
        borderRadius: 10
    },
    login: {
        paddingTop:15,
        paddingBottom:15,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#8e0f7e',
        alignItems: 'center',
        width: 250
    }
});


