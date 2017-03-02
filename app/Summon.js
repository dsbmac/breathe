import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Summon extends Component {

  navSecond() {
    this.props.navigator.push({
      id: 'second'
    })
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text>Tap me to summon</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Summon.propTypes = {
  title: PropTypes.string.isRequired,
  // onForward: PropTypes.func.isRequired,
  // onBack: PropTypes.func.isRequired,
};