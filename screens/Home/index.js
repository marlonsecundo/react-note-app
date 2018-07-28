import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Menu, ListNote } from '../../components';
import styles from './styles';

export default class Home extends Component {

    render() {
        return (
            <View style={styles.rootContainer}>
                <Menu></Menu>
                <ListNote></ListNote> 
            </View>
        );
    }
}