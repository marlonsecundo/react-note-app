import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles, { fonts, colors } from './styles';

export class Note extends Component {
    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.children}</Text>
                    <TouchableOpacity>
                        <View style={styles.btContainer}>
                            <Text style={styles.textAlarm}>10:50</Text>
                            <Icon name="bell" color={colors.secondary} size={fonts.bell}></Icon>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>


        )
    }
}

export default Note;