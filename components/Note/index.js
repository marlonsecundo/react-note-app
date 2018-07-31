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
            <View style={[styles.rootContainer, this.getUpdatedLayout()]}>
                <View  style={styles.container}>
                    <Text style={styles.text}>{this.props.children}</Text>
                    <TouchableOpacity style={styles.btContainer}>
                        <Text style={styles.textAlarm}>10:50</Text>
                        <Icon name="bell" color={colors.secondary} size={fonts.bell}></Icon>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }


    getUpdatedLayout = () =>
    {
        let width = Dimensions.get('window').width - metrics.padding * 2;
        nota = this.props.children;

        width = nota.length > 50 ? width : width / 2;

        let style = {
            width: width
        }

        return style;
    }

   
}

export default Note;