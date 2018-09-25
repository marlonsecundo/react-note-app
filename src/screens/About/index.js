import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import { ButtonIcon } from '../../components/Generic';
import styles, { colors, metrics } from './styles';

export class About extends Component {

  starOnPress = () => {

  }

  render() {
    return (
      <View style={styles.rootContainer}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sobre</Text>
        </View>

        <View style={styles.rateContainer}>
          <Text style={styles.rate}>Gostou?</Text>
          <Text style={styles.rate}>Me ajude avaliando este app! :P</Text>
        </View>

        <ButtonIcon size={metrics.iconBig} onPress={this.starOnPress} icon="star" rippleColor={colors.third} color={colors.high}></ButtonIcon>

        <View style={styles.container}>
          <Text style={styles.text}>Logo made by </Text>
          <TouchableOpacity onPress={() => { Linking.openURL('https://www.flaticon.com/authors/prettycons') }}>
            <Text style={styles.text}>prettycons</Text>
          </TouchableOpacity>
          <Text style={styles.text}> from </Text>
          <TouchableOpacity onPress={() => { Linking.openURL('https://www.flaticon.com/') }}>
            <Text style={styles.text}>flaticon</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => { Linking.openURL('https://github.com/marlonsecundo') }}>
            <View style={styles.btContainer}>
              <Image source={require('../../assets/images/me.jpg')} style={styles.image}></Image>
              <Text style={styles.name}>Marlon Secundo</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default About;