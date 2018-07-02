import React from 'react';
import {StyleSheet, AsyncStorage, TouchableHighlight, Modal, Alert, View, Text, ImageBackground, FlatList, TextInput, Button } from 'react-native';
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
            modalVisible: false
        }
    }

    _keyExtractor = (item, index) => item.key;

    _renderItem = ({item}) => (
        <Text>{item.key}</Text>
    );

    setModalVisible = (value) => {
        this.setState({modalVisible: value});
    };


    render() {
        const data = [{key: 'a'}, {key: 'b'}];
        return (
            <View>
                <ImageBackground source={AllImage.backgroundImage} style={style.styles.container}>
                    <View style={style.styles.content}>
                        <View style={styles.liItem }>
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
                                    <TextInput
                                        style={{height: 100, borderColor: 'gray', borderWidth: 1}}
                                        onChangeText={(text) => this.setState({text})}
                                        multiline = {true}
                                        numberOfLines = {6}
                                    />
                                    <Button
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }}
                                        title="Hide Model"
                                    />
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
    },

    liItem: {
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 200, top: -175
    }
}