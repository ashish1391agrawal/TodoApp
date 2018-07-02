import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, ImageBackground } from 'react-native';
import * as compoStyle from '../styles/index';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {style, text, image} = this.props;
        if (image) {
            return (
                <ImageBackground source={image} style={style ? style : compoStyle.componentStyle.Heading}>
                    <View>
                        <Text style={compoStyle.componentStyle.text}>{text}</Text>
                    </View>
                </ImageBackground>
            );
        }
        return (
            <View style={style ? style : compoStyle.componentStyle.Heading}>
                <Text style={compoStyle.componentStyle.text}>{text}</Text>
            </View>
        );

    }
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool
    ]),
    style: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
