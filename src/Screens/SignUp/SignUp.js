import React from 'react';
import {StyleSheet, CameraRoll, AsyncStorage, Alert, TouchableHighlight, View, Text, Modal, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import * as AllImage from '../../images/index';
import { UserText, Header, Gallery } from '../../Components/index';
import * as style from '../../styles/index';
import { Constants, Permissions, ImagePicker } from 'expo';

export class SignUp extends React.Component {
    static navigationOptions = {
        headerTitle: <Header text={'Sign Up'} image={AllImage.header}/>,
    };
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            images: [],
            galleryModal: false,
            profileImage: ''
        };
        const permissions = Permissions.CAMERA_ROLL;
        const { status } = Permissions.askAsync(permissions);
    }

    signUp = () => {
        AsyncStorage.setItem('name', this.state.userName);
        AsyncStorage.setItem('password', this.state.password);
        if (this.state.profileImage) {
            AsyncStorage.setItem('profile', this.state.profileImage);
        }
        Alert.alert('Welcome To ToDo');
    };
    login = () => {
        this.props.navigation.navigate('Home');
    };
    camera = () => {
        CameraRoll.getPhotos({
            first: 100,
            assetType: 'All'
        }).then( (r) => {
            this.setState({images: r.edges});
        }).catch((err) => {
            console.log('err=======', err);
        })
    };

    setGalleryModal = () => {
        if(!this.state.galleryModal) {
            this.camera();
        }
        this.setState({galleryModal: !this.state.galleryModal});
    };
    getSlectedImage = (imagePath) => {
        if (imagePath) {
            this.setState({profileImage: imagePath});
        }
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
                        <Modal animationType="fade" transparent={true} visible={this.state.galleryModal}
                               onRequestClose={() => {
                                   alert('Modal has been closed.');
                               }}>
                            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <View style={{width: 300, height: 300, backgroundColor: '#c6ffdd'}}>
                                    <Gallery data={this.state.images} selectedImageValue={this.getSlectedImage}/>
                                    <TouchableHighlight onPress={ this.setGalleryModal}>
                                        <Text>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>

                        <TouchableHighlight onPress={this.setGalleryModal} >
                            <Text>Add Photos</Text>
                        </TouchableHighlight>

                        <Text onPress={this.login}>Login</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
