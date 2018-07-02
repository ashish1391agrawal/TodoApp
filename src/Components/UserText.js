import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, KeyboardAvoidingView, TextInput } from 'react-native';
import * as compoStyle from '../styles/index';

export class UserText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {style, onChange, value, placeholder, secureTextEntry} = this.props;
        return (
            <TextInput
                style={style ? style : compoStyle.componentStyle.textInput}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        );
    }
}

UserText.propTypes = {
    placeholder: PropTypes.string,
    style: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func,
    secureTextEntry: PropTypes.bool
};
