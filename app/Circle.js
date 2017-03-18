import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing
} from 'react-native'

export default class Circle extends Component {
    constructor() {
        super()
        this.animatedValue = new Animated.Value(0)
        this.count_factor = 0.8
    }
    componentDidMount() {
        this.animate()
    }
    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 4000*this.count_factor,
                easing: Easing.linear
            }
        ).start(() => this.hold())
    }

    hold() {
        this.animatedValue.setValue(1)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 0.99,
                duration: 7000*this.count_factor,
                easing: Easing.linear
            }
        ).start(() => this.shrink())
    }

    shrink() {
        this.animatedValue.setValue(0.99)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 0,
                duration: 8000*this.count_factor,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    render() {

        const growingCircleWidth = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })

        const growingCircleHeight = growingCircleWidth
        const growingBorderRadius = 300 / 2

        return (
            <Animated.View style={{
                width: growingCircleWidth,
                height: growingCircleHeight,
                borderRadius: growingBorderRadius,
                backgroundColor: "blue"
            }} />
        )
    }
}

