import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, KeyboardAvoidingView, TextInput } from 'react-native';

export class UserText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {style, onChange, value, placeholder, secureTextEntry} = this.props;
        return (
            <TextInput
                style={style ? style : styles.textInput}
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: 250,
        borderWidth: 1,
        marginBottom: 15,
        borderColor: 'transparent',
        borderRadius: 10
    }
});
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
