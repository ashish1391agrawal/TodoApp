import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, AsyncStorage, TouchableHighlight, Modal, Alert, Image,View, Text, ImageBackground, FlatList, TextInput, Button } from 'react-native';
import * as AllImage from '../../images/index';
import { UserText, Header, TodoTask, TodoTaskcomp } from '../../Components/index';
import * as style from '../../styles/index';

export class TodoList extends React.Component {
    static navigationOptions = {
        headerTitle: <Header text={'Todo List'} image={AllImage.header}/>,
    };
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            todo: [],
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

    _keyExtractor = (item, index) => {
        return item.key + '';
    }

    _renderItem = ({item}) => (
        <Text>{item.value}</Text>
    );

    setModalVisible = () => {
        this.setState({modalVisible: !this.state.modalVisible});
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
                    AsyncStorage.getItem('todo', (err, value)=> {
                        console.log('?', value);
                        if (value) {
                            this.setState({todo: [{key: JSON.parse(value).key, value: JSON.parse(value).value}]});
                            // this.state.todo=[];
                        }
                        console.log('todo array', this.state.todo.length);
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

    test = (ntodo) => {
        AsyncStorage.setItem('todo', JSON.stringify({key: this.state.todo.length + 1, value: ntodo}));
        this.setModalVisible();
    };

    render() {
        const data = [{key: 'a'}, {key: 'b'}];
        console.log('todo array in render', this.state.todo);

        return (
            <View>
                <ImageBackground source={AllImage.backgroundImage} style={style.styles.container}>
                    <View style={style.styles.content}>
                        <View style={styles.liItem }>
                            <GetImagePath imageUrl={this.state.userData.profileImage}/>
                            <FlatList
                                data={this.state.todo}
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
                                    <TodoTaskcomp getData={this.test} />
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

class GetImagePath extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.imageUrl) {
            return (
                <Image source={{uri: this.props.imageUrl}} style={{width: 100, height: 100}}/>
            )
        }
        return (
            <Text>Hello</Text>
        )
    }
}
GetImagePath.propTypes = {
    imageUrl: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ])
};

const styles = {
    model: {
        width: '100%',
        height: '50%'
    },

    liItem: {
        height: 200, top: -170
    }
}