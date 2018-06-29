import React from 'react';
import {StyleSheet, AsyncStorage, Alert, View, Text, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as AllImage from '../../images/index';
import { UserText, Header } from '../../Components/index';

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
                <ImageBackground source={AllImage.backgroundImage} style={styles.container}>
                    <View style={styles.content}>
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
                                style={styles.login}>
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
    },
    Heading: {
        color: '#fff',
        backgroundColor: '#8e0f7e',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginBottom:15,
        borderRadius:10,
    }
});
