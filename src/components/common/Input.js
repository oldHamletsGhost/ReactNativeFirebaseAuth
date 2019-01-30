import React from 'react';
import {TextInput, View, Text, Platform} from "react-native";

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {

    const {inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
            />
        </View>
    );
};

const styles = {
    inputStyle:{
        color: '#000',
        flex: 2,
        fontSize: 18,
        height: Platform.OS === 'android' ? 40 : 20,
        lineHeight: 23,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 0,
        paddingBottom: 0,
    },
    labelStyle: {
        flex: 1,
        fontSize: 18,
        paddingLeft: 20
    },
    containerStyle:{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        height: 40
    }


};

export {Input};

