import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

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