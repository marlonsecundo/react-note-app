import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles, { fonts, colors, metrics } from './styles';

export class Note extends Component {


    constructor(props) {
        super(props);

    }

    componentDidMount = () => {

    }

    render() {
        return (
            <View style={[styles.container, this.getStyle(), this.props.style]}>
                <Text style={styles.text}>{this.props.children}</Text>
                <TouchableOpacity style={styles.btContainer}>
                    <Text style={styles.textAlarm}>10:50</Text>
                    <Icon name="bell" color={colors.secondary} size={metrics.iconSmall}></Icon>
                </TouchableOpacity>
            </View>
        )
    }

    getStyle = () => {
        let result =  (this.props.id + 1) % 3 === 0 ? {
            width: metrics.screen.width - metrics.padding * 2 - 10,
        } : {
            width: (metrics.screen.width) / 2.0 - metrics.padding * 2 + 5,
        }

        return result;
    }

}

export default Note;