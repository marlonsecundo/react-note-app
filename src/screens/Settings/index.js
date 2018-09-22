import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class Settings extends Component {
  render() {
    return (
      <View>
        <Text> Settings Screen </Text>
      </View>
    )
  }
}

export default Settings;