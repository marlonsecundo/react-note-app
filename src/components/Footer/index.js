import React, { Component } from 'react';
import { Text, View, Dimensions, Platform } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/layout';
import styles, { metrics } from './styles';

export class Footer extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.rootContainer} >
        <View style={styles.container}>
          <Text style={styles.text}>As notas serão excluídas em 5h</Text>
        </View>
      </View>
    )
  }


}

export default Footer;