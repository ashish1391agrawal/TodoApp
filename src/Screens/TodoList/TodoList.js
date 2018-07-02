import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, AsyncStorage, TouchableHighlight, Modal, Alert, Image,View, Text, ImageBackground, FlatList, TextInput, Button } from 'react-native';
import * as AllImage from '../../images/index';
import { UserText, Header } from '../../Components/index';
import * as style from '../../styles/index';

export class TodoList extends React.Component {
    static navigationOptions = {
        headerTitle: <Header text={'Todo List'} image={AllImage.header}/>,
    };
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userData: {
                name: null,
                password: null,
                profileImage: null
            }
        };
    }

    componentWillMount() {
        this.getUserData();
    }

    _keyExtractor = (item, index) => item.key;

    _renderItem = ({item}) => (
        <Text>{item.key}</Text>
    );

    setModalVisible = (value) => {
        this.setState({modalVisible: value});
    };

    getUserData = () => {
        let password = '';
        let name = '';
        let profileImage = '';
        AsyncStorage.getItem('password', (err,  value) => {
            password = value;
            AsyncStorage.getItem('name', (err,  value) => {
                name = value;
                AsyncStorage.getItem('profile', (err,  value) => {
                    profileImage = value;
                    this.setState({userData: {
                        password: password,
                        profileImage: profileImage,
                        name: name
                    }
                    });
                });
            });
        });
    };
    getImagePath = () => {
        if (this.state.userData.profileImage){
            let imagePath = {uri: this.state.userData.profileImage};
            return (
                <Image key={'0'} source={imagePath} />
            );
        }else {
            return (
                <Text>Ashish</Text>
            )
        }
    };

    render() {
        const data = [{key: 'a'}, {key: 'b'}];
        return (
            <View>
                <ImageBackground source={AllImage.backgroundImage} style={style.styles.container}>
                    <View style={style.styles.content}>
                        <View style={styles.liItem }>
                            <GetImagePath imageUrl={this.state.userData.profileImage}/>
                            <FlatList
                                data={data}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem}
                                style={{backgroundColor: '#525252',  width: 100, borderRadius: 15}}

                            />
                        </View>
                        <Modal
                            animationType="fade"
                            transparent={false}
                            visible={this.state.modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                            }}>
                            <View style={styles.model}>
                                <View>
                                    <Text>Hello World!</Text>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}>
                                        <Text>Hide Modal</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </Modal>
                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(true);
                            }}>
                            <Text>Show Modal</Text>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = {
    model: {
        width: '100%',
        height: '50%'
    }
}