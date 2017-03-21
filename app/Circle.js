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
        this.colorAnimatedValue = new Animated.Value(0)
        this.count_factor = 0.8
        // this.palette = [[66, 134, 244], [200, 43, 114]]
        this.palette = [[0,139,131], [77,174,131], [160,174,121], [255,228,153], [255,102,94]]
        
        this.state = {
            dynamicColorString: 'rgba(51,156,177, 1)',
            basecolor: this.palette[Math.floor(Math.random() * this.palette.length)]
        }
    }
    componentDidMount() {
        this.changeColor()
    }
    animate() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 4000 * this.count_factor,
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
                duration: 7000 * this.count_factor,
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
                duration: 8000 * this.count_factor,
                easing: Easing.linear
            }
        // ).start()
        ).start(() => this.changeColor())
    }

    changeColor() {
        this.setState({
            basecolor: this.palette[Math.floor(Math.random() * this.palette.length)],
            dynamicColorString: `rgba( ${this.state.basecolor[0]}, ${this.state.basecolor[1]}, ${this.state.basecolor[2]}, 1)`
        })
        this.animate()
    }

    growColor() {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 4000 * this.count_factor,
                easing: Easing.linear
            }
        ).start(() => this.growColor())
    }

    render() {

        const growingCircleWidth = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })

        const growingCircleHeight = growingCircleWidth
        const growingBorderRadius = 300 / 2

        //colors

        var inbreathColor = this.animatedValue.interpolate({
            inputRange: [0, 1],
            // outputRange: ['rgba(255,255,255, 1)', 'rgba(51,156,177, 1)']
            outputRange: ['rgba(255,255,255, 1)', this.state.dynamicColorString]
        });

        return (
            <Animated.View style={{
                width: growingCircleWidth,
                height: growingCircleHeight,
                borderRadius: growingBorderRadius,
                backgroundColor: inbreathColor
            }} />
        )
    }
}

