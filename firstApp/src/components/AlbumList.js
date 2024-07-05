import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums: [] };

    componentDidMount() {
        axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbumsList() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }
    render() {
        return (<ScrollView>{ this.renderAlbumsList() }</ScrollView>);
    }
};
export default AlbumList;