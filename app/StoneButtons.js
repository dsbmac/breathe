import React, { Component } from 'react';
import { Text, Button, Alert } from 'react-native';

export default class StoneButtons extends Component {
    navModalImage() {
        this.props.navigator.push({
            id: 'third'
        })
    };

    render() {
        return (
            <Button
                onPress={this.navModalImage.bind(this)}
                title="Press Me"
                accessibilityLabel="See an informative alert"
            />
        );
    }
}