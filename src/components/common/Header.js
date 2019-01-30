import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        elevation: 2,
        justifyContent: 'center',
        height: 60,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
};

export {Header};
