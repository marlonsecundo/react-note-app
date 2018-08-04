import React, { Component } from 'react';
import { Text, View, Dimensions, Platform } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/layout';
import styles from './styles';
import { metrics } from '../../styles';

export class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      style: {
      }
    }

  }

  render() {
    return (
      <View style={[styles.rootContainer, this.state.style]} onLayout={(event) => { this.onLayout(event) }}>
        <View style={styles.container}>
          <Text style={styles.text}>As notas serão excluídas em 5h</Text>
        </View>
      </View>
    )
  }

  onLayout = (event) => {
    let height = event.nativeEvent.layout.height;
    let width = Dimensions.get("window").width;
    let y = Dimensions.get("window").height - height;

    y = Platform.OS === 'android' ? y - 24 : y;

    this.setState({ style: { height: height, width: width,  top: y } });
    this.props.setFooterHeight(height);
  }

}

const mapDistacthToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(null, mapDistacthToProps)(Footer);