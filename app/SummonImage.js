import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class SummonImage extends Component {
    render() {
        return (
            <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                style={{ width: 400, height: 400 }} />
        );
    }
}