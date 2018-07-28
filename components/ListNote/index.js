import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Note } from '../../components';
import styles from './styles';
export class ListNote extends Component {
    render() {
        return (
            <View style={styles.rootContainer}>
                <Note>sdfsdfdsudf</Note>
                <Note>sdfsdfdsfusfhdsudf</Note>
            </View>
        )
    }
}

export default ListNote;