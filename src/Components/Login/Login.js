import React from 'react';
import {StyleSheet, AsyncStorage, Alert, View, Text, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as AllImage from '../../images/index';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }
    login = () => {
        AsyncStorage.setItem('name', 'ashu');
        AsyncStorage.setItem('password', 'ashu');
        let password = '';
        let name = '';
        AsyncStorage.getItem('password', (err,  value) => {
            password = value;
            AsyncStorage.getItem('name', (err,  value) => {
                name = value;
                if (name === this.state.userName && this.state.password === password) {
                    Alert.alert('Welcome');
                }else {
                    Alert.alert('invalid');
                }
            });
        });
    };
    render() {
        return (
            <View>
                <ImageBackground source={AllImage.backgroundImage} style={styles.container}>
                    <View style={styles.content}>
                        <KeyboardAvoidingView>
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(userName) => this.setState({userName})}
                                value={this.state.userName}
                                placeholder="Enter User Name"
                            />
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(password) => this.setState({password})}
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
        borderColor: 'gray',
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