import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, ImageBackground } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {style, text, image} = this.props;
        if (image) {
            return (
                <ImageBackground source={image} style={style ? style : styles.Heading}>
                    <View>
                        <Text style={styles.text}>{text}</Text>
                    </View>
                </ImageBackground>
            );
        }
        return (
            <View style={style ? style : styles.Heading}>
                <Text style={styles.text}>{text}</Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    Heading: {
        backgroundColor: '#00f6f7',
        position: 'relative',
        zIndex: 10,
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 15
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#8e0f7e'
    }
});




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
