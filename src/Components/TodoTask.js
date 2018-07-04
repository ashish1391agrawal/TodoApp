import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ScrollView, View, Text, FlatList, TextInput } from 'react-native';
import * as compoStyle from '../styles/index';

export class TodoTask extends React.Component {
    constructor(props) {
        super(props);
    }

    _renderItem = (item) => {
        if (item.item && item.item.node) {
            return (
                <Text>abc</Text>
            );
        }
    };

    _keyExtractor = (item, index) => {
        return index + '';
    };

    render() {
        const {style, todo} = this.props;
        return (
            <FlatList
                data={todo}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                numColumns={1}
            />
        )
    }
}

export class TodoTaskcomp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    setData = (val) => {
        if (val) {
            this.props.getData(val);
        }
        this.setState({text: val});
    };
    render() {
        return (
            <View>
                <TextInput
                    style={{height: 100, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setData(text)}
                    multiline = {true}
                    numberOfLines = {6}
                />
            </View>
        )
    }
}

const styles = {
    checkBox: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: '#fff'
    }
};


TodoTask.propTypes = {
    todo: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]),
    style: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
TodoTaskcomp.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]),
    getData: PropTypes.func
};
