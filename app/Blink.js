import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true }
        setInterval(() => {
            this.setState(
                {
                    isVisible: !this.state.isVisible
                }
            )
        }, 1000)
    }
    render() {
        let display = this.state.isVisible ? this.props.text : "";
        return (
            <Text> {display}  </Text>
        );
    }
}