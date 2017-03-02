import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, Navigator } from 'react-native';
import Blinker from './Blinker';
import Summon from './Summon';
import SummonImage from './SummonImage';

export default class Navigation extends React.Component{
  render() {
    return (
      <Navigator
        initialRoute={{id: 'first'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'first':
        return (<Summon navigator={navigator} title="first"/>);
      case 'second':
        return (<SummonImage/>);
    }
  }
}