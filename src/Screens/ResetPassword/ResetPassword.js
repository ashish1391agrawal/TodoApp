import React from 'react';
import {StyleSheet, AsyncStorage, Alert, View, Text, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as AllImage from '../../images/index';
import { UserText, Header } from '../../Components/index';

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
                        text: 'OK', onPress: () => this.props.navigation.navigate('Home')
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
                <ImageBackground source={AllImage.backgroundImage} style={styles.container}>
                    <View style={styles.content}>
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
                                style={styles.login}>
                                <Text style={{color: '#fff'}}>Save</Text>
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
