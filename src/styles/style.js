import React from 'react';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    content: {
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: 250,
        borderWidth: 1,
        marginBottom: 15,
        borderColor: 'transparent',
        borderRadius: 10
    },
    login: {
        paddingTop:15,
        paddingBottom:15,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: '#8e0f7e',
        alignItems: 'center',
        width: 250
    }
});