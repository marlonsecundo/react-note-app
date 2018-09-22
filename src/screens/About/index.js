import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles';

export class About extends Component {
  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sobre</Text>
        </View>

        <Text style={styles.dev}>Desenvolvedor</Text>
        <Image source={require('../../assets/images/me.jpg')} style={styles.image}></Image>
        <Text style={styles.name}>Marlon Secundo</Text>
        <Text style={styles.rate}>Gostou?</Text>
        <Text style={styles.rate}>Me ajude avaliando este app! :P</Text>



      </View>
    )
  }
}

export default About;