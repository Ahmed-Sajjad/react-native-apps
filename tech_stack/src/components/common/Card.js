import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const { containerStyle } = styles;
    return (
        <View style={containerStyle}>{props.children}</View>
    );
};
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width:0, height:10},
        shadowOpacity: 1,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}
export {Card};