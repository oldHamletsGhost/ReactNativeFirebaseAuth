import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, children}) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle:{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#077AFF',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle:{
        alignSelf: 'center',
        color: '#007AFF',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export {Button};