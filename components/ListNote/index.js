import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles';
export class ListNote extends Component {
    render() {
        return (
            <View style={styles.rootContainer}>
                <Text> Lista de Notas </Text>
            </View>
        )
    }
}

export default ListNote;