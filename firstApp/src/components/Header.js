import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}
const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 1,
        elevation: 2,
        backgroundColor: '#DCDCDC',
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}
export default Header;