import React, { Component } from 'react';
import { Text } from 'react-native';
import Spinner from './Spinner';
import Stagger from './Stagger';
import GrowingCircle from './GrowingCircle';



export default class App extends Component {
    render() {
        return (
            <GrowingCircle/>
        );
    }
}