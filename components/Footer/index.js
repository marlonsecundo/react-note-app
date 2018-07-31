import React, { Component } from 'react';
import { Text, View, Dimensions, Platform } from 'react-native';
import styles from './styles';
export class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {}
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

    this.setState({
      style: {
        height: height,
        width: width,
        left: 0,
        top: y,
        opacity: 1,
      }
    });

    this.props.onLayout({ height: height, width: width, x: 0, y: y });
  }
}

export default Footer;