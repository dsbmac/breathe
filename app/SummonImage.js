import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import StoneButtons from './StoneButtons';

export default class SummonImage extends Component {

    render() {
        return (
            <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={styles.container}>
                <StoneButtons navigator={this.props.navigator}/>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: null,
    }
});