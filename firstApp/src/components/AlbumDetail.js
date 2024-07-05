import React from 'react';
import { Image, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    const { artist, image, title, thumbnail_image } = props.album;
    const { headerContentStyle, headerTextStyle, imageStyle, thumbnailContainerStyle, thumbnailStyle } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }}  />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{ uri: image }} style={imageStyle} />
            </CardSection>           
        </Card>
    );
};
export default AlbumDetail;

const styles = {
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around"
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    thumbnailContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};