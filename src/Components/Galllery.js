import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ScrollView, View, CheckBox, Text, FlatList, Image, ImageBackground } from 'react-native';
import * as compoStyle from '../styles/index';

export class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    _renderItem = (item) => {
        if (item.item && item.item.node && item.item.node.image) {
            return (
                <GalleryComponent img={item} {...this.props}/>
            );
        }
    };

    _keyExtractor = (item, index) => {
        return index + '';
    };

    render() {
        const {style, data} = this.props;
        return (
            <FlatList
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                numColumns={3}
            />
        )
    }
}

class GalleryComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedImage: false
        }
    }
    selectedImageValue = (value) => {
        if (!this.state.selectedImage) {
            this.props.selectedImageValue(value);
        }
        this.setState({selectedImage: !this.state.selectedImage});
    };
    render() {
        const {style, img} = this.props;
        return (
            <View>
                <CheckBox value={this.state.selectedImage}
                          onValueChange={this.selectedImageValue.bind(this, img.item.node.image.uri)} style={styles.checkBox}/>
                <Image key={img.index} style={{width: 100, height: 100, margin: 5, borderRadius: 20}}
                   source={{ uri: img.item.node.image.uri }} />
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


Gallery.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string
    ]).isRequired,
    style: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
GalleryComponent.propTypes = {
    img: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired,
    selectedImageValue: PropTypes.func
};
